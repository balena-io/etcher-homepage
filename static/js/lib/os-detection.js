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
