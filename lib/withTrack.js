import React, { Component, PropTypes } from 'react';

const withTrack = ComponentToWrap => {
  return class TrackerConnect extends Component {
    static contextTypes = {
      track: PropTypes.func
    };

    render() {
      const { track } = this.context;
      return <ComponentToWrap {...this.props} track={track} />;
    }
  };
};

export default withTrack;
