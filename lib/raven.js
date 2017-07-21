import Raven from 'raven-js';
import locals from '../config';

try {
  Raven.config(locals.sentryURL).install();
} catch (e) {
  console.warn('Could not install raven-js');
}
