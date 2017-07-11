import fetch from 'isomorphic-fetch';
import S3 from '../lib/s3';
import locals from '../config';
import Promise from 'bluebird';
const fs = Promise.promisifyAll(require('fs'));
import _ from 'lodash';

let data;

const fetchData = () => {
  return Promise.all([
    fetch('https://raw.githubusercontent.com/resin-io/etcher/master/docs/CLI-INSTALLATION.md')
    .then(res => ( res.text() )),
    fetch('https://raw.githubusercontent.com/resin-io/etcher/master/CHANGELOG.md')
    .then(res => ( res.text() )),
    S3(locals.s3Bucket, locals.title.toLowerCase())
  ])
  .then(data => {
    const sortedDownloads = _.orderBy(data[2].links, ['os', 'arch'], ['desc', 'asc']);
    Object.assign(locals, {
      cli: data[0],
      changelog: data[1],
      version: data[2].version,
      downloads: sortedDownloads.filter((item) => {
        return item.href.indexOf('cli') === -1;
      }),
      cliDownloads: sortedDownloads.filter((item) => {
        return item.href.indexOf('cli') > -1;
      })
    });

    return locals
  })
  .then(allData => {
    return fs.writeFileAsync(`${__dirname}/../config/cache.json`, JSON.stringify(allData, null, 4))
  })
  .catch(err => {
    console.error(err)
  })
}

fetchData();
