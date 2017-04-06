$("img#screen-shot").on('load', function() {
  positionScreenShot();
}).each(function() {
  if(this.complete) $(this).load();
});

// https://gist.github.com/tdukart/b87afb278c41245741ae7a0c355a0a0b
function kebabCase(string) {
  var result = string;

  // Convert camelCase capitals to kebab-case.
  result = result.replace(/([a-z][A-Z])/g, function(match) {
    return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase();
  });

  // Convert non-camelCase capitals to lowercase.
  result = result.toLowerCase();

  // Convert non-alphanumeric characters to hyphens
  result = result.replace(/[^-a-z0-9]+/g, '-');

  // Remove hyphens from both ends
  result = result.replace(/^-+/, '').replace(/-$/, '');

  return result;
}

function positionScreenShot() {
  var $product = $('.product');
  var $jumbotron = $('.jumbotron');
  var $features = $('.features');
  var h = $product.height();

  $product.css('bottom', -(h/2));
  $jumbotron.css('margin-bottom', h/2);
  $features.css('padding-top', h/2).fadeIn();
}

$( window ).resize(function() {
  positionScreenShot();
});

// Bind data
var app = new Vue({
  el: '#app',
  data: {
    os: Sniffr.os.name,
    downloads:  [],
    version: null,
    versionKebabed: null,
    dynamicLink: $defaultLink,
    electron: "<a href=http://electron.atom.io/>Electron</a>",
    selectedImage: null
  }
});

// Query s3
var bucket = new s3("https://resin-production-downloads.s3.amazonaws.com", "etcher");
bucket.getLatestVersion(function(version){
  app.version = "v" + version;
  app.versionKebabed = kebabCase(app.version);
  bucket.getFiles(version, function(files){
    app.downloads = files;
    bucket.getDynamicLink(files, app.os, app.dynamicLink.eventName, function(link) {
       app.dynamicLink = link[0];
       $('.fadeIn').addClass('active');
       cosmetics();
    });
  });
});


// mixpanel
$(function() {
  mixpanel.track('[etcher website] page viewed', {
    'page name' : document.title,
    'url' : window.location.pathname
  });

  $("body").on('click', '[data-track]', function(evt) {
    var event_name = $(this).data('track');
    try {
      var event_attrs = $(this).data('track-attrs');
      event_attrs.trackedElement = $(this).data('track-id');
      event_attrs.detectedOS = app.osSlug;
    }
    catch(err) {
      console.log(err);
    }

    mixpanel.track(event_name, event_attrs);
  });
});

function cosmetics() {
  setTimeout(function(){
    $('.dropdown-menu').each(function(){
      width = $(this).closest('.btn-group').outerWidth()
      $(this).css("min-width", width);
    });
  }, 1000) // hacky -- fix
}
