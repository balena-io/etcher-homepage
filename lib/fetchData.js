import fetch from 'isomorphic-fetch';
import S3 from '../lib/s3';
import locals from './locals.js';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

let data;

const fetchData = () => {
  return Promise.all([
    fetch('https://api.github.com/repos/resin-io/etcher/contents/docs/CLI-INSTALLATION.md')
    .then(res => ( res.json() )),
    fetch('https://api.github.com/repos/resin-io/etcher/contents/CHANGELOG.md')
    .then(res => ( res.json() )),
    S3(locals.s3Bucket, locals.title.toLowerCase(), false),
    S3(locals.s3Bucket, locals.title.toLowerCase(), true)
  ])
  .then(data => {
    // console.log(d)
    return Object.assign(locals, {
      cli: new Buffer(data[0].content.toString(), 'base64').toString(),
      changelog: new Buffer(data[1].content.toString(), 'base64').toString(),
      downloads: data[2],
      cliDownloads: data[3]
    });
  })
  .then(allData => {
    return fs.writeFileAsync(`${__dirname}/../locals.json`, JSON.stringify(allData, null, 4))
  })
  .catch(err => {
    throw new Error('Error fetching data', err)
  })
}

fetchData();
