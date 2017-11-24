import React, { Component, PropTypes, Children } from 'react';
import Router from 'next/router';
import EventLog from 'resin-event-log';
import isEmpty from 'lodash/isEmpty';

export class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: null
    };
  }

  componentDidMount() {
    const ifvisible = require('ifvisible.js');
    if (this.state.track === null) {
      const tracker = EventLog(this.props.analytics);
      tracker.start();

      if (window.location.pathname.startsWith('/success-banner')) {
        // on sucess page we only log page views on focus
        ifvisible.on('focus', function() {
          tracker.page.visit({ url: window.location.pathname });
        });
      } else {
        dataLayer.push({ event: 'optimize.activate' });
        tracker.page.visit({ url: window.location.pathname });
      }

      Router.routeChangeComplete = url => {
        // used to run optimize a/b dom manipulation after the react render.
        dataLayer.push({ event: 'optimize.activate' });
        // track any further client side route changes
        tracker.page.visit({ url: url });
      };

      const track = (type, data) => {
        try {
          tracker.create(type, data);
          // we should consider adding facebook pixel
          // to resin-analytics if we use it elsewhere
          window.fbq !== undefined && window.fbq('track', type, data);
        } catch (err) {
          // don't throw on analytics failures
          console.error(err);
        }
      };

      this.setState({
        track
      });
    }
  }

  static childContextTypes = {
    track: PropTypes.func
  };

  getChildContext() {
    return {
      track: this.state.track
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
