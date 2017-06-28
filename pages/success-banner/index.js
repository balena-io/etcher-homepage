import React from 'react';
import Head from 'next/head';

const eventLog = (eventDesc) => {
  const data = 'Banner ' + eventDesc;

  return () => {
    const logJSON = JSON.stringify({
      command: 'log',
      data
    });

    console.log(logJSON);
  }
}

class Button extends React.Component {
  render() {
    return (
      <a
        href={ this.props.href }
        target="_blank"
        className="button"
        onClick={ eventLog(this.props.event) }>
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
        event="click Github star button">
        <img className="icon github" src="/static/social/octocat.png" />
        Star on Github
      </Button>
      <Button
        href="https://twitter.com/intent/tweet?text=Just%20flashed%20an%20image%20with%20%23etcher%20https%3A%2F%2Fetcher.io%20by%20%40resin_io%20and...">
        event="click Tweet button">
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
    <a href="https://resin.io/">
      <img className="brand" src="/static/resin.png" />
    </a>
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
