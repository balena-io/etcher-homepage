var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="OSX";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

new Vue({
  el: '#app',
  data: {
    os: OSName
  }
})

window.addEventListener('mousewheel', function(e){
    scrollDirection = e.wheelDelta < 0 ? true : false;
});

var count = 0
var nPixels = 20
var $elem = $('.screen-shot')
$(window).on('scroll', function() {

  var docViewTop = $(this).scrollTop();
  var docViewBottom = docViewTop + $(this).height();
  
  if (isScrolledIntoView($elem, docViewTop, docViewBottom)) {
    images = ['step1.png', 'step2.png', 'step3.png', 'step3.png', 'complete.png']
    if (window.pageYOffset % nPixels === 0) {
      if (scrollDirection && count < images.length) {
        replaceImg($elem, images[count]);
        count++;
        console.log(count)
      } else if(!scrollDirection && count > 0){
        count--;
        replaceImg($elem, images[count]);
        console.log(count)
      }
    }
  }
});

function replaceImg(element, newImage){
  console.log(newImage);
  var styleProps = $elem.css("background-image", "url(static/images/" + newImage + ")");
}

function isScrolledIntoView($elem, docViewTop, docViewBottom) {
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
