var IS_BROWSER = typeof window !== 'undefined';
export const isExternal = (url) => {
  if (IS_BROWSER) {
    var element = document.createElement('a');
    element.href = url;
    console.log('hostname', element.hostname, window.location.hostname)
    console.log(url, element.hostname === window.location.hostname)
    return element.hostname === window.location.hostname;
  } else {
    return false
  }
}
