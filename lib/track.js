import Router from 'next/router';
import reactGa from 'react-ga';

let mixpanel;
let CrossStorageHub;

const logPageView = (locals, url) => {
  console.log('logging page view');
  reactGa.set({ page: url });
  reactGa.pageview(url);
  mixpanel.track(`[ ${locals.title} website page view ]`, { url: url });
}

const methods = {
  init: (locals) => {
    if (!mixpanel) {
      mixpanel = require('mixpanel-browser');
      mixpanel.init(locals.analytics.mixpanel);
    }

    reactGa.initialize(locals.analytics.ga);
    logPageView(locals, window.location.pathname);

    Router.onRouteChangeStart = (url) => {
      // track any further client side route changes
      logPageView(locals, url);
    };
  },
  handle: (evtName, attrs) => {
    console.log('event Tracked', evtName, attrs);
    mixpanel.track(evtName, attrs);
  }
}

export default methods
