
	// init controller
	var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 100})
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller)
          .on('enter', function () {
              $("#screen-shot").css("bottom", 0);
          });
