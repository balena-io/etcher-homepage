import Raven from 'raven-js';
import locals from '../locals.js';

Raven
    .config(locals.sentryURL)
    .install();
