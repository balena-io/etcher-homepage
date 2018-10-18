const path = require('path');

const containers = path.resolve(`${__dirname}/pages`);

module.exports = {
	getRoutes: ({ siteProps }) => {
		const routes = [
			{
				path: '/',
				title: 'Home',
				component: `${containers}/Home`,
			},
			{
				path: '/success-banner',
				title: 'success-banner',
				component: `${containers}/success-banner`,
			},
			{
				component: `${containers}/Docs`,
				title: 'Docs',
				path: '/docs',
				children: siteProps.docs.map(doc => {
					return {
						component: `${containers}/Doc`,
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
