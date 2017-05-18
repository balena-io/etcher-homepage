import Raven from 'raven-js';
import locals from '../locals.json';

Raven
    .config(locals.sentryURL)
    .install();
