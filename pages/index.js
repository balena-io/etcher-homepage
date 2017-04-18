import 'isomorphic-fetch';
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Layout from '../components/Layout';
import locals from '../locals';
import S3 from '../lib/s3';
import track from '../lib/track';
import DownloadBtn from '../components/DownloadBtn';
import Grid from '../components/Grid';
import Feature from '../components/Feature';
import Story from '../components/Story';
import Section from '../components/Section.js';
import Table from '../components/Table.js';

const fetchData = async () => {
  const url = 'https://resin-production-downloads.s3.amazonaws.com'
  const prefix = 'etcher'
  const downloads = await S3(url, prefix);
  return { downloads: downloads, locals: locals }
}

export default class extends Component {

  static async getInitialProps () {
    return fetchData();
  }

  static async getStaticInitialProps () {
    return fetchData();
  }

  render () {
    const { locals, downloads } = this.props;
    return (
      <Layout locals={locals}>
        <Jumbotron className="text-center bg-inverse text-white rounded-0 mb-0">
          <h1 className="display-3">{locals.slogan}</h1>
          <p className="lead">{locals.lead}</p>
          <DownloadBtn downloads={downloads} handler={track.handle} color="primary">Download</DownloadBtn>
        </Jumbotron>
        <Grid className="bg-faded py-5" Component={Feature} items={locals.features} />
        <Section title={`Why ${locals.title}?`} className="bg-inverse text-white py-4">
          <Story story={locals.story} />
        </Section>
        <Section title="Downloads" className="py-5">
          <Table items={downloads.links} />
        </Section>
      </Layout>
    );
  }
};
