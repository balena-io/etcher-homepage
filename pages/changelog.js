import React from 'react';
import Markdown from 'react-markdown';
import Nav from '../components/Nav';
import Layout from './_Layout';
import locals from '../config/cache.json';

const Page = (props) => (
  <Layout {...locals}>
    <div className="container">
      <div className="row">
        <div className="my-5 col-md-8 offset-md-2">
          <Markdown source={locals.changelog} />
        </div>
      </div>
    </div>
  </Layout>
)

export default Page;
