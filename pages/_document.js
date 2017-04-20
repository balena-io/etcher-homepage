// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, ...props }) {
    const {html, head} = renderPage()
    return { html, head }
  }

  // this is needed for static exports
  static async getStaticInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
    return props
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
