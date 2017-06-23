import fetch from 'isomorphic-fetch';
import S3 from '../lib/s3';
import locals from '../config';
import Promise from 'bluebird';
const fs = Promise.promisifyAll(require('fs'));
import _ from 'lodash';

let data;

const fetchData = () => {
  return Promise.all([
    fetch('https://api.github.com/repos/resin-io/etcher/contents/docs/CLI-INSTALLATION.md')
    .then(res => ( res.json() )),
    fetch('https://api.github.com/repos/resin-io/etcher/contents/CHANGELOG.md')
    .then(res => ( res.json() )),
    S3(locals.s3Bucket, locals.title.toLowerCase())
  ])
  .then(data => {
    const sortedDownloads = _.orderBy(data[2].links, ['os', 'arch'], ['desc', 'asc']);
    Object.assign(locals, {
      cli: new Buffer(data[0].content, 'base64').toString(),
      changelog: new Buffer(data[1].content, 'base64').toString(),
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
