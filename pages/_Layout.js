import React, { Component, PropTypes } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from '../components/Image';
import Typekit from 'react-typekit';
import { Tracker } from './_Providers';
import 'babel-polyfill';
import '../lib/raven';

import { tagManagerHead, tagManagerNoScript } from '../lib/scripts';

export default class extends Component {
  render() {
    return (
      <Tracker analytics={this.props.analytics}>
        <div>
          <Head>
            <script
              dangerouslySetInnerHTML={{
                __html: tagManagerHead(this.props.analytics.tagManagerId)
              }}
            />
            <title>
              {this.props.title}
            </title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              rel="shortcut icon"
              href="/static/favicon.ico"
              type="image/x-icon"
            />
            <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
            <meta property="og:url" content={`${this.props.website}`} />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content={`${this.props.title} by resin.io`}
            />
            <meta property="og:description" content={`${this.props.lead}`} />
            <meta
              property="og:image"
              href={`/static/${this.props.screenshot}`}
            />
            <title>
              {this.props.title}
            </title>
            <Typekit kitId={this.props.typekitId} />
            <link rel="stylesheet" type="text/css" href="/static/index.css" />
          </Head>
          <noscript
            dangerouslySetInnerHTML={{
              __html: tagManagerNoScript(this.props.analytics.tagManagerId)
            }}
          />
          <Nav
            color="inverse"
            inverse
            title={this.props.title}
            brand={this.props.logo}
            pages={this.props.nav.header}
          />
          {this.props.children}
          <Footer
            className="bg-inverse text-white py-5"
            pages={this.props.nav.footer}
          >
            <p
              className="col-md-8 pl-0 text-muted"
              dangerouslySetInnerHTML={{ __html: this.props.attribution }}
            />
            <Image className="mb-2 mr-3" src={`${this.props.logo}`} />
            <a href={this.props.company.website} target="_blank">
              <Image
                className="mb-2"
                style={{ maxWidth: '165px' }}
                src={this.props.company.logo}
              />
            </a>
          </Footer>
        </div>
      </Tracker>
    );
  }
}
