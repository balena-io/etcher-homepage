import { parseString } from 'xml2js'
import includes from 'lodash/includes'
import semver from 'semver'
import async from 'async'
import fetch from 'isomorphic-fetch'

const fetchBucket = async (url, prefix) => {
  const res = await fetch(`${url}?delimiter=/&prefix=${prefix}/`);
  const txt = await res.text()
  return new Promise((resolve, reject) => {
    parseString(txt, (err, result) => {
      if (err)
        reject(err);
      else
        resolve(result);
    })
  })
}

const getOS = (str) => {
  if (includes(str, 'darwin')) {
    return 'OS X'
  } else if (includes(str, 'win32')) {
    return 'Windows'
  } else {
    return 'Linux'
  }
}

const getType = (file) => {
  if (!includes(file, 'win32')) {
    return ''
  }

  if (includes(file, 'zip')) {
    return '(Portable)'
  } else if (includes(file, 'exe')) {
    return '(Installer)'
  }

  return ''
}

const getArchString = (str) => {
  if (includes(str, 'x86')) {
    return '(32-bit)'
  } else if (includes(str, 'x64')) {
    return '(64-bit)'
  }
  return ''
}

const getArch = (str) => {
  if (includes(str, 'x86')) {
    return 'x86'
  } else if (includes(str, 'x64')) {
    return 'x64'
  }
  return ''
}

const prettifyFileName = (file) => {
  return `Etcher for ${getOS(file)} ${getArch(file)} ${getArchString(file)} ${getType(file)}`;
}

const getLatestVersion = async (url, prefix) => {
  const versionsArray = []
  const bucket = await fetchBucket(url, prefix);
  const latest = bucket.ListBucketResult.CommonPrefixes.map(item => item.Prefix[0].split('/')[1]).sort(semver.rcompare)[0]
  return Promise.resolve(latest)
}

const getLinks = async (url, prefix, version) => {
  const bucket = await fetchBucket(url, `${prefix}/${version}`);
  const links = bucket.ListBucketResult.Contents
  .filter((item) => {
    // Omit OS X ZIP files (used for update purposes)
    return !(item.Key[0].indexOf('.zip') !== -1 && item.Key[0].indexOf('darwin') !== -1);
  })
  .filter((item) => {
    // Omit the CLI Packages
    return item.Key[0].indexOf('cli') === -1;
  })
  .map((item) => {
    const key = item.Key[0]
    const keyArray = key.split('/')[2].split('-')

    return {
      release: {
        text: prettifyFileName(key),
        href: `${url}/${key}`
      },
      os: getOS(key),
      arch: getArch(key)
    }
  })
  return Promise.resolve(links);
}

export default async (url, prefix) => {
  const version = await getLatestVersion(url, prefix)
  const links = await getLinks(url, prefix, version)
  return Promise.resolve({
    version,
    links
  })
}
