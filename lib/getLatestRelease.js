import includes from 'lodash/includes';
import async from 'async';
import GitHubApi from 'github';

var github = new GitHubApi();

if (process.env.GH_TOKEN) {
  github.authenticate({
    type: 'token',
    token: process.env.GH_TOKEN
  });
}

const getOS = str => {
  if (includes(str, 'darwin')) {
    return 'OS X';
  } else if (includes(str, 'win32')) {
    return 'Windows';
  } else {
    return 'Linux';
  }
};

const getType = file => {
  if (!includes(file, 'win32')) {
    return '';
  }

  if (includes(file, 'zip')) {
    return '(Portable)';
  } else if (includes(file, 'exe')) {
    return '(Installer)';
  }

  return '';
};

const getArchString = str => {
  if (includes(str, 'x86')) {
    return '(32-bit)';
  } else if (includes(str, 'x64')) {
    return '(64-bit)';
  }
  return '';
};

const getArch = str => {
  if (includes(str, 'x86')) {
    return 'x86';
  } else if (includes(str, 'x64')) {
    return 'x64';
  }
  return '';
};

const isCLI = str => {
  return includes(str, 'cli');
};

const prettifyFileName = file => {
  if (isCLI(file)) {
    return `Etcher CLI for ${getOS(file)} ${getArch(file)} ${getArchString(
      file
    )}`;
  } else {
    return `Etcher for ${getOS(file)} ${getArch(file)} ${getArchString(
      file
    )} ${getType(file)}`;
  }
};

const prepAssets = assets => {
  // console.log(assets)
  const preppedAssets = assets
    .filter(item => {
      // Omit OS X ZIP files (used for update purposes)
      return !(
        item.name.indexOf('.zip') !== -1 && item.name.indexOf('darwin') !== -1
      );
    })
    .map(item => {
      return {
        text: prettifyFileName(item.name),
        href: item.browser_download_url,
        os: getOS(item.name),
        arch: getArch(item.name)
      };
    });

  return Promise.resolve(preppedAssets);
};

export default async config => {
  const { data } = await github.repos.getLatestRelease(config);
  const assets = await prepAssets(data.assets);
  return Promise.resolve({
    version: data.tag_name,
    links: assets
  });
};
