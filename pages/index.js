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
import Image from '../components/Image';
import { Share } from 'react-twitter-widgets';
import includes from 'lodash/includes';

const getReleaseNote = async (version) => {
  try {
    const res = await fetch(`https://forums.resin.io/c/etcher.json`);
    const releaseNotes = await res.json();
    return releaseNotes.topic_list.topics.find(topic => ( topic.title.includes(version)))
  } catch (e) {
    console.warn(e);
    return;
  }
}

const fetchData = async () => {
  const downloads = await S3(locals.s3Bucket, locals.title.toLowerCase());
  const releaseNote = await getReleaseNote(downloads.version);

  return { downloads, locals, releaseNote };
}

export default class extends Component {

  static async getInitialProps (props) {
    return fetchData();
  }

  static async getStaticInitialProps (props) {
    return fetchData();
  }

  render () {
    const { locals, downloads, releaseNote } = this.props;
    // console.log({ releaseNote })
    return (
      <Layout locals={locals}>
        <Jumbotron className="text-center bg-inverse text-white rounded-0 mb-0">
          <h1 className="display-3">{locals.slogan}</h1>
          <p className="lead">{locals.lead}</p>
          <DownloadBtn
            className="mb-3"
            downloads={downloads}
            color="primary">
              {downloads.links[0].release.text}
          </DownloadBtn>
          <div className="text-muted">
            <p className="version">version {downloads.version}
              { releaseNote && (<a href={`https://forums.resin.io/t/${releaseNote.slug}`}> - See what&#39;s new!</a>)}
            </p>
          </div>
          <div className="share mb-5">
            <Share url={locals.website} />
            <div>
              <iframe src={`https://ghbtns.com/github-btn.html?user=resin-io&repo=${locals.title.toLowerCase()}&type=star&count=true`} scrolling="0" width="100" height="20px"></iframe>
            </div>
          </div>
          <div className="screenshot">
            <Image
              src={`${locals.screenshot}`}
              retina={false}
            />
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
          <a href="https://github.com/resin-io/etcher#debian-and-ubuntu-based-package-repository-gnulinux-x86x64">
            Looking for Debian (.deb) packages
          </a>
        </Section>
      </Layout>
    );
  }
};
