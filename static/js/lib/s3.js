function s3(url, productName){
   this.url = url;
   this.productName = productName
   this.prefix = this.productName;
}

s3.prototype.getLatestVersion = function(callback){
  getData(this, function(data){
    getVersions(data.directories, "etcher", function(versions){
      callback(versions.sort(cmp)[0]);
    });
  });
}

s3.prototype.getFiles = function(version, callback){
  this.prefix = this.prefix + "/" + version
  getData(this, function(data){
    callback(data.files);
  });
}

s3.prototype.getDynamicLink = function(files, osSlug, backup, callback){
  console.log(osSlug)
  eventName = "download"
  switch (osSlug) {
    case "macos":
        buttonText = "Download for OSX"
        callback(findLink(files, this.productName + "-darwin", buttonText));
        break;
    case "windows":
        buttonText = "Download for Windows"
        callback(findLink(files, this.productName + "-win32", buttonText));
        break;
    case "linux":
        buttonText = "Download for Linux"
        callback(findLink(files, this.productName + "-linux", buttonText));
        break;
    default:
        backup.mobile = true
        callback([backup]);
  }
}

var findLink = function(files, key, buttonText) {
    var matchedFiles = []
    for (var i = 0, len = files.length; i < len; i++) {
        if (files[i].link.toLowerCase().indexOf(key) != -1) {
           files[i].buttonText = buttonText

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

// sorts the semantic versions ascending order
function cmp (a, b) {
    var pa = a.split('.');
    var pb = b.split('.');
    for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return -1;
        if (nb > na) return 1;
        if (!isNaN(na) && isNaN(nb)) return -1;
        if (isNaN(na) && !isNaN(nb)) return 1;
    }
    return 0;
};

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

  switch (split[1]) {
    case "darwin":
        split[1] = "Mac"
        break;
    case "win32":
        split[1] = "Windows"
        break;
    case "linux":
        split[1] = "Linux"
        break;
  }
  return split[0] + " for " + split[1] + " " + split[2].substring(0, 3)
}
