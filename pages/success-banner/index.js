import React from 'react';
import Head from 'next/head';

const eventLog = (eventDesc) => {
  const data = 'Banner ' + eventDesc;

  return () => {
    const url = new URL(location.href);

    if (url.searchParams.get('etcher-version').indexOf('1.0.0') !== -1) {
      console.log(data);

    } else {
      const logJSON = JSON.stringify({
        command: 'log',
        data
      });

      console.log(logJSON);
    }
  }
}

class Link extends React.PureComponent {
  constructor() {
    super();

    this.type = 'link';
  }

  render() {
    return (
      <a
        href={ this.props.href }
        target="_blank"
        className={ this.type }
        onClick={ eventLog(`click ${this.props.label} ${this.type}`) }>
        { this.props.children }
      </a>
    )
  }
}

class Button extends Link {
  constructor() {
    super();

    this.type = 'button';
  }
}

const Banner = () => (
  <main className="vertical center">
    <div>
      <h1>We hope you enjoyed using
        <img src="/static/etcher.svg" className="etcher-logo" />
      </h1>
    </div>
    <div className="horizontal center">
      <Button href="https://github.com/resin-io/etcher"
        label="star on Github">
        <img className="icon github" src="/static/social/octocat.png" />
        Star on Github
      </Button>
      <Button href="https://twitter.com/intent/tweet?text=%23etcher"
        label="Tweet">
        <img className="icon twitter" src="/static/social/twitter.png" />
        Tweet
      </Button>
    </div>
  </main>
)

const Footer = () => (
  <footer>
    made with
    <img className="icon" src="/static/love.svg" />
    by
    <Link href="https://resin.io/"
      label="Resin">
      <img className="brand" src="/static/resin.png" />
    </Link>
  </footer>
)

const Page = ({ content }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <link rel="stylesheet" type="text/css" href="/static/success-banner.css" />
    </Head>
    <Banner />
    <Footer />
  </div>
)

export default Page;
