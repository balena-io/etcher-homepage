// using parser and sniffr to get us the best of both
console.log("Detected: " + Sniffr.os.name);

// lazy load jumbotron
$(window).load(function(){
   $('.jumbotron > *').each(function(i){
      $(this).delay((i + 1) * 250).addClass('appear');
      // console.log("loop")
   });
});

// Bind data
var app = new Vue({
  el: '#app',
  data: {
    os: Sniffr.os.name,
    downloads:  [],
    version: "0.0.1",
    dynamicLink: { "buttonText": "Email link to me", "link": "mailto:?subject=Checkout out etcher.io&body=http://www.etcher.io", "mobile": false},
  }
});

// Query s3
var bucket = new s3("https://resin-production-downloads.s3.amazonaws.com", "etcher");


bucket.getLatestVersion(function(version){
   app.version = "v" + version;
   bucket.getFiles(version, function(files){
     app.downloads = files;
    //  app.os =
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

// style dropdown
// var width = $('.dropdown-menu').parent('.btn-group').css('width');
// console.log(width);
// $('.dropdown-menu').css("min-width", width);

// $(window).load(function() {
//    $('.jumbotron').each(function(i) {
//       $(this).delay((i + 1) * 250).fadeIn(2000);
//    });
// });
