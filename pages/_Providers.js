import React, { Component, PropTypes, Children } from 'react';
import Router from 'next/router';
import EventLog from 'resin-event-log';
import isEmpty from 'lodash/isEmpty';

export class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracker: {}
    };
  }

  componentDidMount() {
    if (isEmpty(this.state.tracker)) {
      const tracker = EventLog(this.props.analytics);
      tracker.start();
      dataLayer.push({'event': 'optimize.activate'});
      tracker.page.visit({ url: window.location.pathname });

      Router.routeChangeComplete = url => {
        dataLayer.push({'event': 'optimize.activate'});
        // track any further client side route changes
        tracker.page.visit({ url: url });
      };

      this.setState({
        tracker
      });
    }
  }

  static childContextTypes = {
    tracker: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      tracker: this.state.tracker
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export class Locals extends Component {
  constructor(props) {
    super(props);
  }

  static childContextTypes = {
    locals: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      locals: this.props.locals
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
