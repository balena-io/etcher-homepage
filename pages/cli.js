import React from 'react';
import Markdown from 'react-markdown';
import Nav from '../components/Nav';
import Layout from './_Layout';
import S3 from '../lib/s3';
import locals from '../locals';
import Table from '../components/Table';

const fetchData = async () => {
  return Promise.all([
    fetch('https://api.github.com/repos/resin-io/etcher/contents/docs/CLI-INSTALLATION.md')
    .then(res => ( res.json() )),
    S3(locals.s3Bucket, locals.title.toLowerCase(), true)
  ])
  .then(data => {
    return { content: new Buffer(data[0].content.toString(), 'base64').toString(), downloads: data[1] }
  })
  .catch(err => {
    return {
      content: 'There was an issue fetching page from github',
      downloads: {
        links: []
      }
    }
  })
}

const Page = ({ content, downloads }) => (
  <Layout locals={locals}>
    <div className="container">
      <div className="row">
        <div className="my-5 col-md-8 offset-md-2">
          <h1>Etcher CLI </h1>
          <p>The Etcher CLI is a command-line tool that aims to provide all the benefits of the Etcher desktop application in a way that can be run from a terminal, or even used from a script.</p>
          <p>
            <span className="badge badge-warning">Warning</span> the CLI is currently experimental, proceed with caution and <a href="https://github.com/resin-io/etcher/issues">report issues.</a>
          </p>
          <h2 id="download">Download</h2>
          <Table items={downloads.links} />
          <h2 id="install">Install</h2>
          <Markdown source={content} />
        </div>
      </div>
    </div>
  </Layout>
)

Page.getInitialProps = async ({ req }) => {
  return fetchData();
}

Page.getStaticInitialProps = async ({ req }) => {
  return fetchData();
}

export default Page;
