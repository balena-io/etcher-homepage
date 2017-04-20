import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from './Nav';
import track from '../lib/track';
import Footer from './Footer';
import Image from './Image';
import Typekit from 'react-typekit';

import stylesheet from 'styles/index.scss'

export default class extends Component {

  componentDidMount () {
    track.init(this.props.locals);
  }

  render() {
    const { locals, children } = this.props;
    return (
      <div>
        <Head>
          <title>{locals.title}</title>
          <meta property="og:url" content={`${locals.website}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${locals.title} by resin.io`} />
          <meta property="og:description" content={`${locals.lead}`} />
          <meta property="og:image" content={`${locals.title}`} />
          <title>{this.props.locals.title}</title>
          <Typekit kitId="lzw7tre"/>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Nav
          color="inverse"
          inverse
          title={locals.title}
          brand={locals.logo}
          pages={locals.nav.header}
        />
          { children }
        <Footer className="bg-inverse text-white py-5" pages={locals.nav.footer}>
          <Image
            className="mb-2"
            src={`${locals.logo}`}
          />
          <p
            className="col-md-8 pl-0 text-muted"
            dangerouslySetInnerHTML={{ __html: locals.attribution }} />
        </Footer>
      </div>
    )
  }
}
