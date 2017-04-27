var IS_BROWSER = typeof window !== 'undefined';

// used to determine if we should prefetch a link on the client
export const isExternal = (url) => {
  if (IS_BROWSER) {
    var element = document.createElement('a');
    element.href = url;
    return element.hostname === window.location.hostname;
  } else {
    return false
  }
}
