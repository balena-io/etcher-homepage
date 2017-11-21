import pick from 'lodash/pick';
const IS_PROD = process.env.NODE_ENV === 'production';

const links = {
  'Home': '/',
  'Changelog': '/changelog',
  'Repository': 'https://github.com/resin-io/etcher',
  'CLI': '/cli',
  'Chat': 'https://gitter.im/resin-io/etcher',
  'Contact': 'mailto:hello@etcher.io',
  'About Us': 'https://resin.io',
  'Blog': 'https://resin.io/blog',
  'Mailing List': 'http://eepurl.com/cJ4fkX',
  'Help': 'https://github.com/resin-io/etcher/blob/master/SUPPORT.md'
}

const locals = {
  website: 'https://etcher.io',
  // prefix is used when hosting on gh
  title: 'Etcher',
  prefix: IS_PROD ? '' : '',
  slogan: 'Burn. Better.',
  lead: 'Burn images to SD cards & USB drives, safely and easily.',
  logo: 'logo.png',
  screenshot: 'screenshot.gif',
  typekitId: 'lzw7tre',
  sentryURL: 'https://e7db2e0ed6bc413dbc3c77c72a165171@sentry.io/169437',
  s3Bucket: 'https://resin-production-downloads.s3.amazonaws.com',
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
  nav: {
    header: pick(links, [ 'Repository', 'Changelog' , 'CLI', 'Chat', 'Mailing List', 'Help']),
    footer: links
  },
  company: {
    logo: 'resin.png',
    website: 'https://resin.io'
  },
  attribution: 'Etcher is an open source project by <a target="_blank" href="https://resin.io">resin.io</a> - modern tools to build your fleet of IoT devices.',
  features: [
    {
			"title": "Validated Burning",
			"image": "features/sd.png",
			"meta": "No more writing images on corrupted cards and wondering why your device isn't booting."
		},
		{
			"title": "Hard Drive Friendly",
			"image": "features/hd.png",
			"meta": "Makes drive selection obvious to avoid wiping your entire hard-drive"
		},
		{
			"title": "Beautiful Interface",
			"image": "features/simple.png",
			"meta": "Who said burning SD cards has to be an eyesore."
		},
		{
			"title": "Open Source",
			"image": "features/open-source.png",
			"meta": "Made with JS, HTML, node.js and <a target='_blank' href='http://electron.atom.io/'>Electron</a>. Dive in and contribute!"
		},
		{
			"title": "Cross Platform",
			"image": "features/cross-platform.png",
			"meta": "Works for everyone,<br/>no more complicated install instructions."
		},
		{
			"title": "More on the way",
			"image": "features/coming-soon.png",
			"meta": "50% faster burns, simultaneous writing for multiple drives.<br/><a target='_blank' href='https://github.com/resin-io/etcher/milestones'>View our roadmap</a>"
		}
	],
  story: [
		"Here at <a target='_blank' href='https://resin.io'>resin.io</a> we have thousands of users working through our getting started process and until recently we were embarassed about the steps that involved burning an SD card. There was a separate track for each Mac/Windows/Linux and several manual and error-prone steps along the way.",
		"To our surprise there was nothing out there that fitted our needs. So we built Etcher, a SD card burner app that is simple for end users, extensible for developers, and works on any platform. "
	],
  proMailChimpList: 'https://resin.us3.list-manage.com/subscribe/post?u=87871f17defba2d203db77a92&amp;id=135af0f95d',
  proFeatures: [
    {
			"title": "Multi-Write",
			"image": "pro/features/multi-write.png",
			"meta": "Duplicate 1 SD Card, USB Stick, or External Hard Disk to 16. Or write an image file, either from the web, USB Stick, or External Disk, to 16 Destinations (SD Card, USB Sticks, or External Disks). With Etcher Pro, it’s a matter of a few taps."
		},
		{
			"title": "Insane Speeds",
			"image": "pro/features/insane-speeds.png",
			"meta": "We built Etcher Pro with meticulous attention to the hardware, to assure the fastest writing speed available on the market today. Each Etcher Pro can write with a maximum speed of 60MB/s per port, and 750MB/s total. This is of course limited by the maximum speed of the drives you are writing to, but at least the hardware will no longer slow you down!"
		},
		{
			"title": "Modular Expansion",
			"image": "pro/features/modular-expansion.png",
			"meta": "Are 16 cards too few for you? Good news! Etcher Pro is modularly expandable. Simply connect two Etcher Pro devices together, they will act as one device with 30 destination slots. If you want even more ports, just add more devices, and write to dozens of cards simultaneously. Etcher Pro can expand up to 160 ports, while continuing to operate at full speed."
		},
		{
			"title": "Competitive Pricing",
			"image": "pro/features/competitive-pricing.png",
			"meta": "For the first time ever, a professional card and flash drive duplicator that doesn’t break the bank. Etcher Pro will be competitively price compared to the competition, finally making it affordable for regular people, schools and small businesses to simultaneously write to external media fast."
		}
  ]
}

export default locals;
