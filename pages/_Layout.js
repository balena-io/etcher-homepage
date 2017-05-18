import React, { Component, PropTypes } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from '../components/Image';
import Typekit from 'react-typekit';
import { Tracker, Locals } from './_Providers';
import 'babel-polyfill';
import '../lib/raven';

export default class extends Component {
  render() {
    const { locals, children } = this.props;

    return (
      <Tracker analytics={locals.analytics}>
        <Locals locals={locals}>
          <div>
            <Head>
              <title>{locals.title}</title>
              <meta charSet='utf-8' />
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel="shortcut icon" href={`${locals.prefix}/static/favicon.ico`} type="image/x-icon" />
              <link rel="icon" href={`${locals.prefix}/static/favicon.ico`} type="image/x-icon" />
              <meta property="og:url" content={`${locals.website}`} />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={`${locals.title} by resin.io`} />
              <meta property="og:description" content={`${locals.lead}`} />
              <meta property="og:image" href={`${locals.prefix}/static/${locals.screenshot}`} />
              <title>{this.props.locals.title}</title>
              <Typekit kitId={this.props.locals.typekitId}/>
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
        </Locals>
      </Tracker>
    )
  }
}
