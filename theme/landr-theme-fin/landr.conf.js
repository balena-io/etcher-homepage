const path = require('path');

const containers = path.resolve(`${__dirname}/pages`);

module.exports = {
	getRoutes: ({ siteProps }) => {
		const routes = [
			{
				path: '/etcher',
				title: 'Home',
				component: `${containers}/Home`,
			},

			{
				component: `${containers}/Docs`,
				title: 'Docs',
				path: '/etcher/docs',
				children: siteProps.docs.map(doc => {
					return {
						component: `${containers}/Doc`,
						title: doc.title,
						path: `/${doc.slug}`,
					};
				}),
			},
			{
				component: `${containers}/Pro`,
				title: 'EtcherPro',
				path: '/etcher/pro',
				children: siteProps.docs.map(doc => {
					return {
						component: `${containers}/Pro`,
						title: doc.title,
						path: `/${doc.slug}`,
					};
				}),
			},
			{
				is404: true,
				path: '',
				component: `${containers}/404`,
			},
		];

		// Have to setup a redirect from /docs/getting-started to /getting-started
		const gettingStartedDoc = siteProps.docs.find(
			doc => doc.slug === 'getting-started',
		);

		if (gettingStartedDoc) {
			routes.push({
				component: `${containers}/Doc`,
				title: gettingStartedDoc.title,
				path: `/${gettingStartedDoc.slug}`,
			});
		}

		return routes;
	},
};
