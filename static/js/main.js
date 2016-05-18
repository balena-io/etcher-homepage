$("img#screen-shot").on('load', function() {
  console.log("image loaded correctly");
  positionScreenShot();
}).each(function() {
  if(this.complete) $(this).load();
});

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

// using parser and sniffr to get us the best of both
console.log("Detected: " + Sniffr.os.name);
// Bind data
var app = new Vue({
  el: '#app',
  data: {
    os: Sniffr.os.name,
    downloads:  [],
    version: "0.0.1",
    dynamicLink: $defaultLink,
    mobileLink: $mobileLink,
    electron: "<a href=http://electron.atom.io/>Electron</a>",
    selectedImage: ""
  }
});

// Query s3
var bucket = new s3("https://resin-production-downloads.s3.amazonaws.com", "etcher");
bucket.getLatestVersion(function(version){
  console.log(version);
   app.version = "v" + version;
   bucket.getFiles(version, function(files){
     app.downloads = files;
     bucket.getDynamicLink(files, app.os, app.mobileLink, app.dynamicLink.eventName, function(link) {
       console.log("ssss")
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
    // console.log(event_name);
    try {
      var event_attrs = $(this).data('track-attrs');
      event_attrs.trackedElement = $(this).data('track-id');
      event_attrs.detectedOS = app.osSlug;
    }
    catch(err) {
      console.log(err);
    }

    showInstructions(app, $(this));
    mixpanel.track(event_name, event_attrs);

  });
});

function showInstructions(app, event_element) {
  // check if it's linux
  if (event_element.data('track') == '[etcher website] download') {
    var linkArray = event_element.attr("href").split("/");
    app.selectedImage = linkArray[linkArray.length - 1];
    if (app.selectedImage.indexOf('linux')  > -1) {
      $('.instructions').show();
      $('.description').hide();
      $('.jumbotron .btn-group').hide();
    }
  }
}

function cosmetics() {
  setTimeout(function(){
    $('.dropdown-menu').each(function(){
      width = $(this).closest('.btn-group').outerWidth()
      $(this).css("min-width", width);
    });
  }, 1000) // hacky -- fix
}
