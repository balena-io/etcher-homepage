module.exports = {
	theme: 'theme/landr-theme-fin',
	settings: {
		title: 'balenaEtcher',
		lead: 'Flash. Flawless.',
    description: 'Flash OS images to SD cards & USB drives, safely and easily.',
    featuresLead: 'A better way to burn.',
    proLead: 'The Etcher you love, with the perfect hardware',
    featuresPro: [
      {
        "title": "Multi-Write",
        "icon": "write",
        "description": "Duplicate 1 SD Card, USB Stick, or External Hard Disk to 16. Or write an image file, either from the web, USB Stick, or External Disk, to 16 Destinations (SD Card, USB Sticks, or External Disks). With Etcher Pro, it’s a matter of a few taps."
      },
      {
        "title": "Insane Speeds",
        "icon": "speed",
        "description": "We built Etcher Pro with meticulous attention to the hardware, to assure the fastest writing speed available on the market today. Each Etcher Pro can write with a maximum speed of 60MB/s per port, and 750MB/s total. This is of course limited by the maximum speed of the drives you are writing to, but at least the hardware will no longer slow you down!"
      },
      {
        "title": "Modular Expansion",
        "icon": "modular",
        "description": "Are 16 cards too few for you? Good news! Etcher Pro is modularly expandable. Simply connect two Etcher Pro devices together, they will act as one device with 32 destination slots. If you want even more ports, just add more devices, and write to dozens of cards simultaneously. Etcher Pro can expand up to 160 ports, while continuing to operate at full speed."
      },
      {
        "title": "Competitive Pricing",
        "icon": "price",
        "description": "For the first time ever, a professional card and flash drive duplicator that doesn’t break the bank. Etcher Pro will be competitively priced, finally making it affordable for regular people, schools and small businesses to simultaneously write to external media fast."
      },
    ],
		features: [
        {
          "title": "Validated Flashing",
          "icon": "group-53",
          "description": "No more writing images on corrupted cards and wondering why your device isn't booting."
        },
        {
          "title": "Hard Drive Friendly",
          "icon": "group-38",
          "description": "Makes drive selection obvious to avoid wiping your entire hard-drive"
        },
        {
          "title": "Beautiful Interface",
          "icon": "group-39",
          "description": "Who said flashing SD cards has to be an eyesore."
        },
        {
          "title": "Open Source",
          "icon": "group-14",
          "description": "Made with JS, HTML, node.js and <a target='_blank' href='http://electron.atom.io/'>Electron</a>. Dive in and contribute!"
        },
        {
          "title": "Cross Platform",
          "icon": "group-5",
          "description": "Works for everyone,<br/>no more complicated install instructions."
        },
        {
          "title": "More on the way",
          "icon": "group-35",
          "description": "50% faster flashes, simultaneous writing for multiple drives.<br/><a target='_blank' href='https://github.com/resin-io/etcher/milestones'>View our roadmap</a>"
        }
	    ],
		analytics: {
			// debug: true,
			mixpanelToken: '0b4c23e0072d8dee7cf8ac7ab7c4a216',
			mixpanelHost: 'https://api.mixpanel.com',
			gaSite: 'etcher.io',
			gaId: 'UA-45671959-2',
			gosquaredId: 'GSN-954701-N',
			prefix: 'Etcher Website',
			tagManagerId: 'GTM-WPMGNJJ'
    },
    motivation: {
      blogPost:
        'https://resin.io/blog/tag/etcher',
      paragraphs: [
        "Here at <a target='_blank' href='https://resin.io'>resin.io</a> we have thousands of users working through our getting started process and until recently we were embarassed about the steps that involved flashing an SD card. There was a separate track for each Mac/Windows/Linux and several manual and error-prone steps along the way.",
        "To our surprise there was nothing out there that fitted our needs. So we built Etcher, an SD card flasher app that is simple for end users, extensible for developers, and works on any platform. "
      ]
    },
    motivationPro: {
      paragraphs: [
        "Etcher is already the best and fastest way for writing to disk images, in fact it’s currently writing 500,000 SD Cards & USB Drives per month! Now, we are working on a way for you to write to more devices, with the same ease of use and streamlined interface you have come to expect from Etcher, and completely independent from your computer.",
        "Etcher Pro is a stand-alone hardware device that allows you to write to multiple cards or usb disks at once, at extreme speeds. Compared to a traditional Disk Duplicator, Etcher Pro is faster and less expensive, while at the same time easier to use and packed with features, so that you can do much more than just copy SD Cards."
      ]
    },
    navigationLinks: [
      {
        text: 'CLI',
        link: '/etcher/cli'
      },
      {
        text: 'Forums',
        link: 'https://forums.resin.io/c/etcher',
      },
      {
        text: 'Mailing list',
        link: '/etcher/mailinglist',
      },
      {
        text: 'Changelog',
        link: '/etcher/changelog',
      },
      {
        text: 'EtcherPro',
        link: '/etcher/pro',
      },
    ],
    ToSLinks: [
      {
        text: 'Terms of Service | ',
        link: 'https://balena.io/terms-of-service/',
      },
      {
        text: 'Privacy Statement | ',
        link: 'https://balena.io/privacy-policy/',
      },
      {
        text: 'Master Agreement | ',
        link: 'https://balena.io/master-agreement/'
      },
      {
        text: 'Copyright 2018 Balena | All Rights Reserved',
        link: ''
      },
    ],
    releases: [
      {
        text: "Etcher for Windows x64 (64-bit) (Installer)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/Etcher-Setup-1.4.5-x64.exe",
        os: "Windows",
        arch: "x64",
        installerType: "(Installer)"
      },
      {
        text: "Etcher for Windows x64 (64-bit) (Portable)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/Etcher-Portable-1.4.5-x64.exe",
        os: "Windows",
        arch: "x64",
        installerType: "(Portable)"
      },
      {
        text: "Etcher for Windows x86 (32-bit) (Installer)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/Etcher-Setup-1.4.5-x86.exe",
        os: "Windows",
        arch: "x86",
        installerType: "(Installer)"
      },
      {
        text: "Etcher for Windows x86 (32-bit) (Portable)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/Etcher-Portable-1.4.5-x86.exe",
        os: "Windows",
        arch: "x86",
        installerType: "(Portable)"
      },
      {
        text: "Etcher for macOS",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/Etcher-1.4.5.dmg",
        os: "macOS",
        arch: "x64"
      },
      {
        text: "Etcher for Linux x64 (64-bit) (AppImage)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-electron-1.4.5-linux-x64.zip",
        os: "Linux",
        arch: "x64",
        installerType: "(AppImage)"
      },
      {
        text: "Etcher for Linux x86 (32-bit) (AppImage)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-electron-1.4.5-linux-ia32.zip",
        os: "Linux",
        arch: "x86",
        installerType: "(AppImage)"
      }
    ],
    cliDownloads: [
      {
        text: "Etcher CLI for Windows x64 (64-bit)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-cli-1.4.5-windows-x64.zip",
        os: "Windows",
        arch: "x64",
        installerType: "(Installer)"
      },
      {
        text: "Etcher CLI for Windows x86 (32-bit)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-cli-1.4.5-windows-x86.zip",
        os: "Windows",
        arch: "x86",
        installerType: "(Installer)"
      },
      {
        text: "Etcher CLI for macOS",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-cli-1.4.5-darwin-x64.tar.gz",
        os: "macOS",
        arch: "x64"
      },
      {
        text: "Etcher CLI for Linux x64 (64-bit)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-cli-1.4.5-linux-x64.tar.gz",
        os: "Linux",
        arch: "x64",
        installerType: "(AppImage)"
      },
      {
        text: "Etcher CLI for Linux x86 (32-bit)",
        href: "https://github.com/resin-io/etcher/releases/download/v1.4.5/etcher-cli-1.4.5-linux-x86.tar.gz",
        os: "Linux",
        arch: "x86",
        installerType: "(AppImage)"
      }
    ]
	},
};
