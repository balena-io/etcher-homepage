function s3(url, productName){
   this.url = url;
   this.productName = productName
   this.prefix = this.productName;
}

s3.prototype.getLatestVersion = function(callback){
  var self = this;

  var EXPECTED_NUMBER_OF_FILES_IN_VERSION = 7;

  getData(this, function(data){
    getVersions(data.directories, "etcher", function(versions){
      var validVersions = [];

      var ASYNC_CONCURRENT_LIMIT = 3;
      async.eachLimit(versions, ASYNC_CONCURRENT_LIMIT, function(version, callback) {

        getData({
          url: self.url,
          productName: self.productName,
          prefix: self.prefix + "/" + version
        }, function(versionData) {
          if (versionData.files.length >= EXPECTED_NUMBER_OF_FILES_IN_VERSION) {
            validVersions.push(version);
          }

          return callback();
        });

      }, function(error) {
        if (error) {
          return callback(error);
        }

        callback(validVersions.sort(semver.rcompare)[0]);
      });
    });
  });
}

s3.prototype.getFiles = function(version, callback){
  this.prefix = this.prefix + "/" + version
  getData(this, function(data){

    // Omit OS X ZIP files (used for update purposes)
    for (var x = 0; x < data.files.length; x++) {
      if (data.files[x].name.indexOf('.zip') !== -1 && data.files[x].name.indexOf('darwin') !== -1) {
        data.files.splice(x, 1);
      }
    }

    callback(data.files);
  });
}

s3.prototype.getDynamicLink = function(files, osSlug, backup, eventName, callback){
  switch (osSlug) {
    case "macos":
        buttonText = "Download for OSX >= 10.9"
        callback(findLink(files, "darwin", buttonText, eventName));
        break;
    case "windows":
        buttonText = "Download for Windows"
        callback(findLink(files, "win32", buttonText, eventName));
        break;
    case "linux":
        buttonText = "Download for Linux"
        callback(findLink(files, "linux", buttonText, eventName));
        break;
    default:
        backup.mobile = true
        callback([backup]);
  }
}

var findLink = function(files, key, buttonText, eventName) {
    var matchedFiles = []
    for (var i = 0, len = files.length; i < len; i++) {
        if (files[i].link.toLowerCase().indexOf(key) != -1) {
           files[i].buttonText = buttonText
           files[i].eventName = eventName
           matchedFiles.push(files[i]); // Return as soon as the object is found
          // console.log("match Found: " + files[i].name);
        }
        if (i === len-1) {
          return matchedFiles
        }
    }
}



getData = function($this, callback){
  query_url = $this.url + "?delimiter=/&prefix=" + $this.prefix + "/"
  $.get(query_url)
    .done(function(data) {
      var xml = $(data);
      callback(parseXML(xml, $this))
    })
    .fail(function(error) {
      console.error(error);
    });
};

parseXML = function(xml, $this) {
  var files = $.map(xml.find('Contents'), function(item) {
    item = $(item);
    var name = item.find('Key').text().split("/")[2]
    return {
      name: name,
      prettyName: prettifyFileName(name),
      link: $this.url + "/" + item.find('Key').text(),
      lastModified: item.find('LastModified').text(),
      size: bytesToHumanReadable(item.find('Size').text()),
      type: 'file'
    }
  });
  var directories = $.map(xml.find('CommonPrefixes'), function(item) {
    item = $(item);
    return {
      key: item.find('Prefix').text(),
      lastModified: '',
      size: '0',
      type: 'directory'
    }
  });
  return {
    files: files,
    directories: directories,
    prefix: $(xml.find('Prefix')[0]).text(),
  }
};

function getVersions(versions, prefix, callback) {
    callback($.map(versions, function(v) {
      return v.key.split('/')[1]
    }))
}

function bytesToHumanReadable(sizeInBytes) {
  var i = -1;
  var units = [' kB', ' MB', ' GB'];
  do {
    sizeInBytes = sizeInBytes / 1024;
    i++;
  } while (sizeInBytes > 1024);
  return Math.max(sizeInBytes, 0.1).toFixed(1) + units[i];
}

function prettifyFileName(file) {
  // <name>-v<version>-<os>-<arch>.<extension>
  split = file.split("-");

  function getArchString(arch) {
    if (arch != undefined) {
      platform = arch.substring(0, 3)
      switch (platform) {
        case "x86":
          platform = platform + " (32-bit)"
          break;
        case "x64":
          platform = platform + " (64-bit)"
          break;
        default:
          break;
      }
      return platform
    } else {
      return ""
    }
  }

  var extension = file.substring(file.lastIndexOf('.') + 1, file.length);
  var type = '';

  switch (split[3]) {
    case "darwin":
        split[3] = "Mac"
        break;
    case "win32":
        split[3] = "Windows"
        if (extension === 'zip') {
          type = ' (Portable)'
        } else if (extension === 'exe') {
          type = ' (Installer)'
        }
        break;
    case "linux":
        split[3] = "Linux"
        break;
  }
  return split[0] + " for " + split[3] + " " + getArchString(split[4]) + type;
}
