// using parser and sniffr to get us the best of both
console.log("Detected: " + Sniffr.os.name);

// Bind data
var app = new Vue({
  el: '#app',
  data: {
    os: Sniffr.os.name,
    downloads:  [],
    version: "0.0.1",
    dynamicLink: { "buttonText": "View on github", "link": "https://github/resin-io/etcher" },
  }
});

// Query s3
var bucket = new s3("https://resin-production-downloads.s3.amazonaws.com", "etcher");


bucket.getLatestVersion(function(version){
   app.version = version;
   bucket.getFiles(version, function(files){
     app.downloads = files;
     bucket.getDynamicLink(files, app.os, app.dynamicLink, function(link) {
       app.dynamicLink = link[0];
     });
   });
});

// Show downloads
$( ".downloads-trigger" ).click(function() {
  $( "#downloads" ).slideToggle( "slow");
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
    // console.log("event_name: " + event_name + "event_attrs" + event_attrs);
    mixpanel.track(event_name, event_attrs);
  });
});
