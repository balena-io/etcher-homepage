import Raven from 'raven-js';
import locals from '../locals.json';

try {
  Raven
      .config(locals.sentryURL)
      .install();
} catch (e) {
  console.warn('Could not install raven-js');
}
