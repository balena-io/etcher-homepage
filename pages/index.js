import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Layout from './_Layout';
import locals from '../config/cache.json';
import DownloadBtn from '../components/DownloadBtn';
import Grid from '../components/Grid';
import Feature from '../components/Feature';
import Story from '../components/Story';
import Section from '../components/Section';
import Table from '../components/Table';
import Image from '../components/Image';
import { Share } from 'react-twitter-widgets';
import includes from 'lodash/includes';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
const FORUM_LINK = 'https://forums.resin.io';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // default to changelog if no forumlink is found
      releaseNote: {
        link: '/changelog'
      }
    };
  }

  componentDidMount() {
    fetch(`${FORUM_LINK}/c/etcher.json`)
      .then(res => res.json())
      .then(topics => {
        // Forum user IDs of Etcher team members
        const ETCHER_TEAM_USERIDS = [
          4, // @jviotti
          169, // @lurch
          179, // @shou
          223 // @jhermsmeier
        ];
        // Check if someone from the Etcher team made the post
        // and it contains latest version
        return topics.topic_list.topics.find(topic => {
          return (
            topic.title.includes(`Etcher ${locals.version} release`) &&
            ETCHER_TEAM_USERIDS.includes(topic.posters[0].user_id)
          );
        });
      })
      .then(releaseNote => {
        if (releaseNote) {
          releaseNote.link = `${FORUM_LINK}/t/${releaseNote.slug}`;
          releaseNote.target = '_blank';
          this.setState({ releaseNote });
        }
      })
      .catch(e => console.warn(e));
  }

  render() {
    return (
      <Layout {...locals}>
        <Jumbotron className="text-center bg-inverse text-white rounded-0 mb-0">
          <h1 className="display-3">
            {locals.slogan}
          </h1>
          <p className="lead">
            {locals.lead}
          </p>
          <DownloadBtn
            className="mb-3"
            downloads={locals.downloads}
            color="primary"
          >
            {locals.downloads[0].text}
          </DownloadBtn>
          <div className="text-muted">
            <p>
              or, use our{' '}
              <Link prefetch href="/cli">
                <a>experimental CLI</a>
              </Link>
              <br />
              version {locals.version} -
              <a
                target={this.state.releaseNote.target}
                href={this.state.releaseNote.link}
              >
                {' '}See what&#39;s new!
              </a>
            </p>
          </div>
          <div className="share mb-5">
            <Share url={locals.website} />
            <div>
              <iframe
                src={`https://ghbtns.com/github-btn.html?user=resin-io&repo=${locals.title.toLowerCase()}&type=star&count=true`}
                scrolling="0"
                width="100"
                height="20"
              />
            </div>
          </div>
          <div className="screenshot">
            <Image src={`${locals.screenshot}`} retina={false} />
          </div>
        </Jumbotron>
        <Section title="Features" className="bg-primary text-white py-5">
          <Grid
            className="bg-primary text-white"
            Component={Feature}
            items={locals.features}
          />
        </Section>
        <Section
          title={`Why ${locals.title}?`}
          className="bg-inverse text-white py-5"
        >
          <Story story={locals.story} />
        </Section>
        <Section title="Downloads" className="py-5">
          <Table items={locals.downloads} />
          <div className="text-center">
            Looking for{' '}
            <a href="https://github.com/resin-io/etcher#debian-and-ubuntu-based-package-repository-gnulinux-x86x64">
              Debian (.deb) packages
            </a>{' '}
            or{' '}
            <a href="https://github.com/resin-io/etcher#redhat-rhel-and-fedora-based-package-repository-gnulinux-x86x64">
              Red Hat (.rpm) packages
            </a>
            ?
          </div>
        </Section>
      </Layout>
    );
  }
}
