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

class Button extends React.PureComponent {
  render() {
    return (
      <a
        href={ this.props.href }
        target="_blank"
        className="button"
        onClick={ eventLog(`click ${this.props.label} button`) }>
        { this.props.children }
      </a>
    )
  }
}

class Link extends React.PureComponent {
  render() {
    return (
      <a
        href={ this.props.href }
        target="_blank"
        onClick={ eventLog(`click ${this.props.label} link`) }>
        { this.props.children }
      </a>
    )
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
        label="Github star">
        <img className="icon github" src="/static/social/octocat.png" />
        Star on Github
      </Button>
      <Button
        href="https://twitter.com/intent/tweet?text=Just%20flashed%20an%20image%20with%20%23etcher%20https%3A%2F%2Fetcher.io%20by%20%40resin_io%20and...">
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
