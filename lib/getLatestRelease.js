import includes from 'lodash/includes';
import async from 'async';
import GitHubApi from 'github';

const github = new GitHubApi();

if (process.env.GH_TOKEN) {
  github.authenticate({
    type: 'token',
    token: process.env.GH_TOKEN
  });
}

const getOS = str => {
  if (includes(str, 'darwin') || includes(str, '.dmg')) {
    return 'OS X';
  } else if (includes(str, 'win32') || includes(str, '.exe')) {
    return 'Windows';
  } else if (includes(str, 'linux')) {
    return 'Linux';
  }
};

const getInstallerType = file => {
  if (!includes(file, '.exe')) {
    return '';
  }

  if (includes(file, 'Portable')) {
    return '(Portable)';
  } else {
    return '(Installer)';
  }
  return '';
};

const getArchString = str => {
  if (includes(str, 'x86_64') || includes(str, 'x64')) {
    return '(64-bit)';
  } else if (includes(str, 'i386') || includes(str, 'x86')) {
    return '(32-bit)';
  }
  return '';
};

const getArch = str => {
  if (includes(str, 'x86') || includes(str, 'i386')) {
    return 'x86';
  } else {
    return 'x64';
  }
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
    )} ${getInstallerType(file)}`;
  }
};

const prepAssets = assets => {
  const preppedAssets = assets
    .filter(item => {
      // Omit OS X ZIP files (used for update purposes)
      // Omit electron packages
      return !(
        (includes(item.name, '.zip') && includes(item.name, 'mac')) ||
        (includes(item.name, '.zip') && includes(item.name, 'darwin')) ||
        includes(item.name, 'electron')
      );
    })
    .map(item => {
      return {
        text: prettifyFileName(item.name).trim(),
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
