import fetch from 'isomorphic-fetch';
import getLatestRelease from './getLatestRelease';
import locals from '../config';
import Promise from 'bluebird';
import fileSystem from 'fs';
const fs = Promise.promisifyAll(fileSystem);
import _ from 'lodash';

let data;
const ETCHER_RAW_CLI_URL =
  'https://raw.githubusercontent.com/resin-io/etcher/master/docs/CLI-INSTALLATION.md';
const ETCHER_RAW_CHANGELOG_URL =
  'https://raw.githubusercontent.com/resin-io/etcher/master/CHANGELOG.md';

const fetchData = () => {
  return Promise.all([
    fetch(ETCHER_RAW_CLI_URL).then(res => res.text()),
    fetch(ETCHER_RAW_CHANGELOG_URL).then(res => res.text()),
    getLatestRelease({
      owner: 'resin-io',
      repo: 'etcher'
    })
  ])
    .then(data => {
      // data[2].links.map(console.log)
      const sortedDownloads = _.orderBy(
        data[2].links,
        [item => item.os.toLowerCase(), 'arch', 'installerType'],
        ['desc']
      );
      Object.assign(locals, {
        cli: data[0],
        changelog: data[1],
        version: data[2].version,
        downloads: sortedDownloads.filter(item => {
          return item.href.indexOf('cli') === -1;
        }),
        cliDownloads: sortedDownloads.filter(item => {
          return item.href.indexOf('cli') > -1;
        })
      });

      return locals;
    })
    .then(allData => {
      return fs.writeFileAsync(
        `${__dirname}/../config/cache.json`,
        JSON.stringify(allData, null, 4)
      );
    })
    .catch(err => {
      console.error(err);
    });
};

fetchData();
