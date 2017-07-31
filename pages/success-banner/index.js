import React from 'react';
import Head from 'next/head';

/**
 * @summary Make and return an event method for a given event description string
 * @function
 * @private
 *
 * @param {String} eventDesc - event description
 *
 * @example
 * eventLog('click Tweet button');
 * > 'Banner click Tweet button'
 */
const eventLog = eventDesc => {
  const data = 'Banner ' + eventDesc;

  return () => {
    const url = new URL(location.href);

    // Use the 'new' API version for more recent versions of Etcher utilizing
    // the Robot object format.
    if (url.searchParams.get('api-version') === '1') {
      console.log(
        JSON.stringify({
          command: 'log',
          data
        })
      );

      // Fallback to the old pure-string format.
    } else {
      console.log(data);
    }
  };
};

/**
 * @summary Display Etcher version on mount
 * @class
 * @private
 *
 * @example
 * <EtcherVersion />
 */
class EtcherVersion extends React.PureComponent {
  constructor() {
    super();

    this.state = { version: '' };
  }

  render() {
    return (
      <span className="version">
        {this.state.version}
      </span>
    );
  }

  componentDidMount() {
    const version = new URL(location.href).searchParams.get('etcher-version');
    this.setState({ version });
  }
}

/**
 * @summary Pure text links
 * @class
 * @private
 *
 * @example
 * <Link label="Example" href="https://example.com/">Example page</Link>
 */
class Link extends React.PureComponent {
  constructor() {
    super();

    this.type = 'link';
  }

  render() {
    return (
      <a
        href={this.props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={this.type}
        onClick={eventLog(`click ${this.props.label} ${this.type}`)}
      >
        {this.props.children}
      </a>
    );
  }
}

/**
 * @summary Button links
 * @class
 * @private
 *
 * @example
 * <Button label="Submit" href="/submit/">Submit something</Button>
 */
class Button extends Link {
  constructor() {
    super();

    this.type = 'button';
  }
}

/**
 * @summary Banner
 * @function
 * @private
 *
 * @example
 * <Banner />
 */

const Banner = () =>
  <main className="vertical center">
    <div>
      <h1>
        We hope you enjoyed using
        <img src="/static/etcher.svg" className="etcher-logo" />
      </h1>
    </div>
    <div className="horizontal center">
      <Button href="https://github.com/resin-io/etcher" label="star on Github">
        <img className="icon github" src="/static/social/octocat.png" />
        Star on Github
      </Button>
      <Button
        href="https://twitter.com/intent/tweet?text=Just%20flashed%20an%20image%20with%20%23etcher%20by%20%40resin_io!%20Check%20it%20out%20at%20https%3A%2F%2Fetcher.io"
        label="Tweet"
      >
        <img className="icon twitter" src="/static/social/twitter.png" />
        Tweet
      </Button>
    </div>
  </main>;

/**
 * @summary Footer
 * @function
 * @private
 *
 * @example
 * <Footer />
 */
const Footer = () =>
  <footer>
    made with
    <img className="icon" src="/static/love.svg" />
    by
    <Link href="https://resin.io/" label="Resin">
      <img className="brand" src="/static/resin.png" />
    </Link>
    <Link
      href="https://github.com/resin-io/etcher/blob/master/CHANGELOG.md"
      label="Version"
    >
      <EtcherVersion />
    </Link>
  </footer>;

/**
 * @summary Page
 * @function
 * @public
 *
 * @example
 * <Page />
 */
const Page = () =>
  <div>
    <Head>
      <meta charset="utf-8" />
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/success-banner.css"
      />
    </Head>
    <Banner />
    <Footer />
  </div>;

export default Page;
