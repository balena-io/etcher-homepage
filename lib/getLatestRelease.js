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
  if (
    includes(str, 'darwin') ||
    includes(str, '.dmg') ||
    includes(str, 'mac')
  ) {
    return 'macOS';
  } else if (
    includes(str, 'win32') ||
    includes(str, 'windows') ||
    includes(str, '.exe')
  ) {
    return 'Windows';
  } else if (
    includes(str, 'linux') ||
    includes(str, 'appimage') ||
    includes(str, '.deb') ||
    includes(str, '.rpm')
  ) {
    return 'Linux';
  }
};

const getArch = str => {
  if (
    includes(str, 'x64') ||
    includes(str, 'x86_64') ||
    includes(str, 'amd64') ||
    getOS(str) === 'macOS'
  ) {
    return 'x64';
  }
  return 'x86';
};

const getArchString = str => {
  switch (getArch(str)) {
    case 'x86':
      return '(32-bit)';
    case 'x64':
      return '(64-bit)';
  }
};

const getInstallerType = str => {
  if (getOS(str) === 'macOS') {
    return;
  }

  if (getOS(str) === 'Linux') {
    return '(AppImage)';
  }

  if (includes(str, 'portable')) {
    return '(Portable)';
  } else {
    return '(Installer)';
  }
};

const isCLI = str => {
  return includes(str, 'cli');
};

const getFlow = str => {
  const funcs = [getOS];
  if (getOS(str) === 'macOS') {
    return funcs;
  }

  funcs.push(getArch, getArchString);
  if (isCLI(str)) {
    return funcs;
  }
  funcs.push(getInstallerType);
  return funcs;
};

const packagePrettyName = str => {
  const start = isCLI(str) ? 'Etcher CLI for' : 'Etcher for';
  return getFlow(str)
    .reduce(
      (acc, fn) => {
        const addition = fn(str);
        addition && acc.push(addition);
        return acc;
      },
      [start]
    )
    .join(' ');
};

const prepAssets = assets => {
  const preppedAssets = assets
    .filter(item => {
      // Omit OS X ZIP files (used for update purposes)
      // Omit electron packages
      return !(
        (includes(item.name, '.zip') &&
          getOS(item.name.toLowerCase()) === 'macOS') ||
        includes(item.name, '.AppImage') ||
        includes(item.name, 'electron') ||
        includes(item.name, 'SHASUMS256')
      );
    })
    .map(item => {
      const str = item.name.toLowerCase();
      return {
        text: packagePrettyName(str),
        href: item.browser_download_url,
        os: getOS(str),
        arch: getArch(str),
        installerType: getInstallerType(str)
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
