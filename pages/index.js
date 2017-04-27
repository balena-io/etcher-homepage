import 'isomorphic-fetch';
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Layout from './_Layout';
import locals from '../locals';
import S3 from '../lib/s3';
import DownloadBtn from '../components/DownloadBtn';
import Grid from '../components/Grid';
import Feature from '../components/Feature';
import Story from '../components/Story';
import Section from '../components/Section';
import Table from '../components/Table';

const fetchData = async () => {
  const url = 'https://resin-production-downloads.s3.amazonaws.com';
  const prefix = 'etcher';
  const downloads = await S3(url, prefix);
  return { downloads: downloads, locals: locals, tracker: null };
}

export default class extends Component {

  static async getInitialProps (props) {
    return fetchData();
  }

  static async getStaticInitialProps (props) {
    return fetchData();
  }

  render () {
    const { locals, downloads } = this.props;
    return (
      <Layout locals={locals}>
        <Jumbotron className="text-center bg-inverse text-white rounded-0 mb-0">
          <h1 className="display-3">{locals.slogan}</h1>
          <p className="lead">{locals.lead}</p>
          <DownloadBtn
            className="mb-3"
            downloads={downloads}
            color="primary">
              downloads.links[0].release.text
          </DownloadBtn>
          <div className="screenshot">
            <img className="screenshotContainer" src={`/static/${locals.screenShot}`} />
          </div>
        </Jumbotron>
        <Section title="Features" className="bg-primary text-white py-5">
          <Grid className="bg-primary text-white" Component={Feature} items={locals.features} />
        </Section>
        <Section title={`Why ${locals.title}?`} className="bg-inverse text-white py-5">
          <Story story={locals.story} />
        </Section>
        <Section title="Downloads" className="py-5">
          <Table items={downloads.links} />
        </Section>
      </Layout>
    );
  }
};
