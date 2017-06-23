import React from 'react';
import Markdown from 'react-markdown';
import Nav from '../components/Nav';
import Layout from './_Layout';
import S3 from '../lib/s3';
import locals from '../config/cache.json';
import Table from '../components/Table';

const Page = () => (
  <Layout {...locals}>
    <div className="container">
      <div className="row">
        <div className="my-5 col-md-8 offset-md-2">
          <h1>Etcher CLI </h1>
          <p>The Etcher CLI is a command-line tool that aims to provide all the benefits of the Etcher desktop application in a way that can be run from a terminal, or even used from a script.</p>
          <p>
            <span className="badge badge-warning">Warning</span> the CLI is currently experimental, proceed with caution and <a href="https://github.com/resin-io/etcher/issues">report issues.</a>
          </p>
          <h2 id="download">Download</h2>
          <Table items={locals.cliDownloads} />
          <h2 id="install">Install</h2>
          <Markdown source={locals.cli} />
        </div>
      </div>
    </div>
  </Layout>
)

export default Page;
