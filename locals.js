import pick from 'lodash/pick';

const links = {
  'Home': '/',
  'Changlog': '/changelog',
  'Repository': 'https://github.com/resin-io/etcher',
  'Chat': 'https://gitter.im/resin-io/etcher',
  'Contact': 'mailto:hello@etcher.io',
  'About Us': 'https://resin.io',
  'Blog': 'https://resin.io/blog',
  'Mailing List': 'http://eepurl.com/cJ4fkX'
}

const locals = {
  website: 'https://etcher.io',
  title: 'Etcher',
  slogan: 'Burn. Better.',
  lead: 'Burn images to SD cards & USB drives, safe & easy.',
  logo: 'logo.png',
  screenShot: 'screenShot.gif',
  analytics: {
    debug: true,
    mixpanelToken: '9d6bc43e4d64eb3bd64922c969e2955f',
    mixpanelHost: 'https://api.mixpanel.com',
    gaSite: 'etcher.io',
    gaId: 'UA-61137143-2',
    gosquaredId: 'GSN-575655-Q',
    prefix: 'Etcher'
  },
  nav: {
    header: pick(links, [ 'Repository', 'Changlog' , 'Chat', 'Mailing List' ]),
    footer: links
  },
  attribution: 'Etcher is an open source project by <a target="_blank" href="https://resin.io">resin.io</a> - Modern DevOps for the Industrial Internet of Things',
  features: [
    {
			"title": "Validated Burning",
			"image": "sd",
			"meta": "No more writing images on corrupted cards and wondering why your device isn't booting."
		},
		{
			"title": "Hard Drive Friendly",
			"image": "hd",
			"meta": "Makes drive selection obvious to avoid wiping your entire hard-drive"
		},
		{
			"title": "Beautiful Interface",
			"image": "simple",
			"meta": "Who said burning SD cards has to be an eyesore."
		},
		{
			"title": "Open Source",
			"image": "open-source",
			"meta": "Made with JS, HTML, node.js and <a target='_blank' href='http://electron.atom.io/'>Electron</a>. Dive in and contribute!"
		},
		{
			"title": "Cross Platform",
			"image": "cross-platform",
			"meta": "Works for everyone,</br> no more complicated install instructions."
		},
		{
			"title": "More on the way",
			"image": "coming-soon",
			"meta": "50% faster burns, simultaneous writing for multiple drives. </br><a target='_blank' href='https://github.com/resin-io/etcher/milestones'>View our roadmap</a>"
		}
	],
  story: [
		"Here at <a target='_blank' href='https://resin.io'>resin.io</a> we have thousands of users working through our getting started process and until recently we were embarassed about the steps that involved burning an SD card. There was a separate track for each Mac/Windows/Ubuntu and several manual and error prone steps along the way.",
		"To our surprise there was nothing out there that fitted our needs. So we built Etcher, a SD card burner app that is simple for end users, extensible for developers, and works on any platform. "
	]
}

export default locals;
