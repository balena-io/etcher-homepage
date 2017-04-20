import Router from 'next/router';
import EventLog from 'resin-event-log';

// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

let logger;

const logPageView = (locals, url) => {
  console.log('logging page view');
  logger.page.view({ url: url });
}

const methods = {
  init: (locals) => {
    // check if tracker is setup
    if (typeof logger === 'undefined') {
      logger = EventLog(locals.analytics);
      const uuid = generateUUID();
      logger.start({ userId: uuid, username: uuid });
      logPageView(locals, window.location.pathname);

      Router.onRouteChangeStart = (url) => {
        // track any further client side route changes
        logPageView(locals, url);
      };
    }
  },
  handle: (evtName, attrs) => {
    console.log('event Tracked', evtName, attrs);
  }
}

export default methods
