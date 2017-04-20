import 'isomorphic-fetch';
import React from 'react';
import Markdown from 'react-markdown';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import locals from '../locals';

const fetchData = async () => {
  const res = await fetch('https://api.github.com/repos/resin-io/etcher/contents/CHANGELOG.md');
  const json = await res.json();
  return { content: new Buffer(json.content.toString(), 'base64').toString() }
}

const Page = ({ content }) => (
  <Layout locals={locals}>
    <div className="container">
      <div className="row">
        <div className="my-5 col-md-8 offset-md-2">
          <Markdown source={content} />
        </div>
      </div>
    </div>
  </Layout>
)

Page.getInitialProps = async ({ req }) => {
  return fetchData();
}

Page.getInitialStaticProps = async ({ req }) => {
  return fetchData();
}

export default Page;
