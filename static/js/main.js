var BrowserDetect = {
	init: function () {
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
		this.bit = this.searchString(this.dataBit) || "";
		this.OsVersion = this.searchString(this.dataOsVersion) || "an unknown OS version";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "OSX",

		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	  },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	],
	dataBit : [
		{
			string: navigator.userAgent,
			subString: "Win64",
			identity: "x64"
		},
		{
			string: navigator.userAgent,
			subString: "WOW64",
			identity: "x64"
		}
	],
	dataOsVersion : [
		{
			string: navigator.userAgent,
			subString: "NT 5.1",
			identity: "XP"
		},
		{
			string: navigator.userAgent,
			subString: "NT 6.0",
			identity: "Vista"
		},
		{
			string: navigator.userAgent,
			subString: "NT 6.1",
			identity: "7"
		},
		{
			string: navigator.userAgent,
			subString: "NT 6.2",
			identity: "8"
		}
	]
};
BrowserDetect.init();

console.log(BrowserDetect.OS + ' Version:' + BrowserDetect.OsVersion + ' ARCH:' + BrowserDetect.bit)

new Vue({
  el: '#app',
  data: {
    os: BrowserDetect.OS,
    osSlug: (BrowserDetect.OS + BrowserDetect.bit).toLowerCase()
  }
})

// define images
	var images = [
		"static/images/step1.png",
		"static/images/step2.png",
		"static/images/step3.png",
		"static/images/complete.png"
	];
  console.log(window.TweenMax)
	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 0,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#screen-shot").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();
	var controller2 = new ScrollMagic.Controller();
	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#screen-shot", duration: 400})
					.setTween(tween)
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller)
          // .setPin("#screen-shot")

  var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 100})
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller)
          .on('enter', function () {
              $("#screen-shot").css("bottom", 0);
          });
