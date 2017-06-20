import React from 'react';
import Head from 'next/head';

class Button extends React.Component {
  render() {
    return (
      <a
        href={ this.props.href }
        target="_blank"
        className="button">
        { this.props.children }
      </a>
    )
  }
}

const Banner = () => (
  <main className="vertical center">
    <div>
      <h1>We hope you enjoyed using</h1>
      <img src="/static/etcher.svg" className="etcher-logo"></img>
    </div>
    <div className="horizontal center">
      <Button href="https://github.com/resin-io/etcher">
        <img className="icon github" src="/static/social/octocat.png" />
        Star on Github
      </Button>
      <Button href="https://twitter.com/intent/tweet?text=%23etcher">
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
    <img className="brand" src="/static/resin.png" />
  </footer>
)

const Page = ({ content }) => (
  <html>
    <Head>
      <meta charset="utf-8" />
      <link rel="stylesheet" type="text/css" href="/static/success-banner.css" />
    </Head>
    <body>
      <Banner />
      <Footer />
    </body>
  </html>
)

export default Page;
