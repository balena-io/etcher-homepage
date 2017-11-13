import React, { Component } from 'react';
import Head from 'next/head';
import { Tracker } from '../_Providers';
import Image from '../../components/Image';
import locals from '../../config/cache.json';
import get from 'lodash/get';

import { tagManagerHead, tagManagerNoScript } from '../../lib/scripts';

const CAMPAIGN_URL =
  'https://etcher.io/pro?utm_source=etcher_app&utm_campaign=etcher_pro';
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
        onClick={() => {
          this.context.track(
            `etcher_app ${this.props.label} button`,
            this.props.meta
          );
          eventLog(`click ${this.props.label} ${this.type}`);
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

// Get tracker details
Link.contextTypes = {
  track: React.PropTypes.func
};

/**
 * @summary Button links
 * @class
 * @private
 *
 * @example
 * <Button label="Submit" href="/submit/">Submit something</Button>
 */
class Button extends Link {
  constructor(props) {
    super();

    this.type = 'button ' + props.className;
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
    <div className="horizontal center grow">
      <Button href="https://github.com/resin-io/etcher" label="star on Github">
        <img className="icon github" src="/static/social/octocat.png" />
        Star on Github
      </Button>
      <Button
        className="ml-2"
        href="https://twitter.com/intent/tweet?text=Just%20flashed%20an%20image%20with%20%23etcher%20by%20%40resin_io!%20Check%20it%20out%3A%20https%3A%2F%2Fetcher.io"
        label="Tweet"
      >
        <img className="icon twitter" src="/static/social/twitter.png" />
        Tweet
      </Button>
    </div>
    <Footer />
  </main>;

/**
   * @summary Etcher Pro Banner variant A
   * @function
   * @private
   *
   * @example
   * <BannerEtcherProA />
   */

const BannerEtcherProA = () =>
  <main className="vertical center variantA">
    <div>
      <h1 className="variantA">Ever wanted a duplicator as slick as Etcher?</h1>
    </div>
    <div className="horizontal center grow">
      <div className="vertical center">
        <Button
          className="variantA"
          label="successBanner pro"
          href={`${CAMPAIGN_URL}&utm_medium=vna`}
          meta={{
            vn: 'a'
          }}
        >
          Discover
          <Image className="icon" src="pro/logo-banner.svg" retina={false} />
        </Button>
      </div>
      <div className="vertical center">
        <Image className="product-img" src="pro/outline.png" />
      </div>
    </div>
    <Footer />
  </main>;

/**
     * @summary Etcher Pro Banner variant B
     * @function
     * @private
     *
     * @example
     * <BannerEtcherProB />
     */

const BannerEtcherProB = () =>
  <main className="vertical center">
    <div className="horizontal center grow">
      <div>
        <Image className="product-img" src="pro/outline.png" />
      </div>
      <div className="ml-2 vertical center">
        <h1>
          Introducing
          <Image
            className="icon etcherPro"
            src="pro/logo-banner.svg"
            retina={false}
          />
        </h1>
        <Button
          label="successBanner pro"
          meta={{
            vn: 'b'
          }}
          href={`${CAMPAIGN_URL}&utm_medium=vnb`}
        >
          Discover More
        </Button>
      </div>
    </div>
    <Footer />
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
class Page extends Component {
  constructor() {
    super();
    this.state = {
      vn: 'a'
    };
  }

  componentDidMount() {
    // get the variant from url query params
    let params = new URL(document.location).searchParams;
    this.setState({
      vn: params.get('vn') || 'a'
    });
  }

  render() {
    return (
      <Tracker analytics={locals.analytics}>
        <div>
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: tagManagerHead(locals.analytics.tagManagerId)
              }}
            />
            <meta charSet="utf-8" />
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/success-banner.css?v=1.0.1"
            />
          </Head>
          <noscript
            dangerouslySetInnerHTML={{
              __html: tagManagerNoScript(locals.analytics.tagManagerId)
            }}
          />
          {this.state.vn === 'b' ? <BannerEtcherProB /> : <BannerEtcherProA />}
        </div>
      </Tracker>
    );
  }
}
export default Page;
