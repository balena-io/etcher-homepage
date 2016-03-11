// using parser and sniffr to get us the best of both
console.log("Detected: " + Sniffr.os.name);
// lazy load jumbotron
$(window).load(function(){
   $('.jumbotron > *').each(function(i){
      $(this).delay((i) * 100).addClass('appear');
   });
});
// Bind data
var app = new Vue({
  el: '#app',
  data: {
    os: Sniffr.os.name,
    downloads:  [],
    version: "0.0.1",
    dynamicLink: { "buttonText": "Email link to myself", "link": "mailto:?subject=Checkout out etcher.io&body=http://www.etcher.io", "mobile": true },
    electron: "<a href=http://electron.atom.io/>Electron</a>"
  }
});

// Query s3
var bucket = new s3("https://resin-production-downloads.s3.amazonaws.com", "etcher");


bucket.getLatestVersion(function(version){
   app.version = "v" + version;
   bucket.getFiles(version, function(files){
     app.downloads = files;
     app.os = "ios"
     bucket.getDynamicLink(files, app.os, app.dynamicLink, function(link) {
       app.dynamicLink = link[0];
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
    // console.log("event_name: " + event_name + "event_attrs" + event_attrs);
    mixpanel.track(event_name, event_attrs);
  });
});

// hacky -- fix
setInterval(function(){
  cosmetics();
}, 3000)

function cosmetics() {
  $('.dropdown-menu').each(function(){
    width = $(this).closest('.btn-group.appear').outerWidth()
    $(this).css("min-width", width);
  });
}
