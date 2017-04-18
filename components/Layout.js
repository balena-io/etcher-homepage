import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from './Nav';
import track from '../lib/track';
import Footer from './Footer';
import Image from './Image';

export default class extends Component {

  static async getInitialProps () {
    const url = 'https://resin-production-downloads.s3.amazonaws.com'
    const prefix = 'etcher'
    const downloads = await S3(url, prefix);
    return { downloads: downloads }
  }

  componentDidMount () {
    track.init(this.props.locals);
    try {
      window.Typekit.load({ async: true })
    }
    catch(e){
      console.log(e)
    }
  }

  render() {
    const { locals, children } = this.props;
    return (
      <div>
        <Head>
          <title>{locals.title}</title>
          <meta charSet='utf-8' />
          <meta property="og:url" content={`${locals.website}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${locals.title} by resin.io`} />
          <meta property="og:description" content={`${locals.lead}`} />
          <meta property="og:image" content={`${locals.title}`} />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
          <title>{this.props.locals.title}</title>
          <script async src="https://use.typekit.net/lzw7tre.js"></script>
        </Head>
        <Nav
          color="inverse"
          inverse
          title={locals.title}
          brand={locals.logo}
          pages={locals.nav.top}
        />
          { children }
        <Footer className="bg-inverse text-white py-5" pages={locals.nav.footer}>
          <Image
            className="mb-2"
            src={`${locals.logo}`}
          />
          <p
            className="col-md-8 pl-0"
            dangerouslySetInnerHTML={{ __html: locals.attribution }} />
        </Footer>
      </div>
    )
  }
}
