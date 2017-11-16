import React from 'react';
import Layout from './_Layout';
import locals from '../config/cache.json';
import Rationale from '../components/pro/Rationale';
import Nav from '../components/pro/Nav';
import Subscribe from '../components/pro/Subscribe';
import Description from '../components/pro/Description';
import Jumbotron from '../components/pro/Jumbotron';
import Features from '../components/pro/Features';

const Page = () => {
  return (
    <Layout {...locals}>
      <Nav>
        <Subscribe action={locals.proMailChimpList} />
      </Nav>
      <Jumbotron mailChimpAction={locals.proMailChimpList} />
      <Rationale />
    </Layout>
  );
};

export default Page;
