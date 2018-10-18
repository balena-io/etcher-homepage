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
          "icon": "features/sd.png",
          "description": "No more writing images on corrupted cards and wondering why your device isn't booting."
        },
        {
          "title": "Hard Drive Friendly",
          "icon": "features/hd.png",
          "description": "Makes drive selection obvious to avoid wiping your entire hard-drive"
        },
        {
          "title": "Beautiful Interface",
          "icon": "features/simple.png",
          "description": "Who said flashing SD cards has to be an eyesore."
        },
        {
          "title": "Open Source",
          "icon": "features/open-source.png",
          "description": "Made with JS, HTML, node.js and <a target='_blank' href='http://electron.atom.io/'>Electron</a>. Dive in and contribute!"
        },
        {
          "title": "Cross Platform",
          "icon": "features/cross-platform.png",
          "description": "Works for everyone,<br/>no more complicated install instructions."
        },
        {
          "title": "More on the way",
          "icon": "features/coming-soon.png",
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
        'https://resin.io/blog/introducing-project-fin-a-board-for-fleet-owners',
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
	},
};
