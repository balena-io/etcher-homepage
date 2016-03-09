BrowserDetect.init();

console.log("Detected: " + BrowserDetect.OS + ' ARCH: ' + BrowserDetect.bit);

// Bind data
var app = new Vue({
  el: '#app',
  data: {
    os: BrowserDetect.OS,
    osSlug: (BrowserDetect.OS + BrowserDetect.bit).toLowerCase(),
    downloads:  [],
    version: "0.0.1",
    dynamicLink: { "link": "https://resin-production-downloads.s3.amazonaws.com/etcher/0.0.1/Etcher.exe" },
  }
});

// Query s3
var bucket = new s3("https://resin-production-downloads.s3.amazonaws.com", "etcher");

bucket.getLatestVersion(function(version){
   app.version = version;
   bucket.getFiles(version, function(files){
     app.downloads = files;
     bucket.getDynamicLink(files, app.osSlug, function(link) {
       console.log(link.link)
       app.dynamicLink = link;
     });
   });
});

// Show downloads
$( ".downloads-trigger" ).click(function() {
  $( "#downloads" ).slideToggle( "slow")
});

// mixpanel
$(function() {
  mixpanel.track('[etcher] page viewed', {
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
