module.exports = {
	theme: 'theme/landr-theme-fin',
	settings: {
		title: 'balenaEtcher',
		lead: 'Flash. Flawless.',
    description: 'Flash OS images to SD cards & USB drives, safely and easily.',
    featuresLead: 'An engine compatible with docker containers',
		features: [
        {
          "title": "Validated Flashing",
          "icon": "group-29",
          "description": "No more writing images on corrupted cards and wondering why your device isn't booting."
        },
        {
          "title": "Hard Drive Friendly",
          "icon": "group-36",
          "description": "Makes drive selection obvious to avoid wiping your entire hard-drive"
        },
        {
          "title": "Beautiful Interface",
          "icon": "group-32",
          "description": "Who said flashing SD cards has to be an eyesore."
        },
        {
          "title": "Open Source",
          "icon": "group-38",
          "description": "Made with JS, HTML, node.js and <a target='_blank' href='http://electron.atom.io/'>Electron</a>. Dive in and contribute!"
        },
        {
          "title": "Cross Platform",
          "icon": "group-39",
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
    navigationLinks: [
      {
        text: 'Repository',
        link: '/docs',
      },
      {
        text: 'Changelog',
        link: '/changelog',
      },
      {
        text: 'CLI',
        link: '/cli'
      },
      {
        text: 'Forums',
        link: 'https://forums.resin.io/c/etcher',
      },
      {
        text: 'Mailing list',
        link: '/mailinglist',
      },
      {
        text: 'Docs',
        link: 'https://github.com/resin-io/etcher/tree/master/docs',
      }
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
