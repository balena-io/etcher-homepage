const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');
const PWMetrics = require('pwmetrics');

const runTest = function(url) {
  return new PWMetrics(url, {
    flags: {
      expectations: false,
      runs: '3', // number or runs
    },
    expectations: {
      ttfmp: {
        warn: '>=1000',
        error: '>=2000'
      },
      tti: {
        warn: '>=2000',
        error: '>=3000'
      },
      ttfcp: {
        warn: '>=1500',
        error: '>=2000'
      },
      fv: {
        warn: '>=1500',
        error: '>=2000'
      },
      psi: {
        warn: '>=1500',
        error: '>=2000'
      },
      vc85: {
        warn: '>=1500',
        error: '>=2000'
      },
      vs100: {
        warn: '>=1500',
        error: '>=2000'
      },
      tti: {
        warn: '>=1500',
        error: '>=2000'
      }
    }
  }).start();
}

app.use(compression());
app.use('/', express.static(path.join(__dirname, '../build')));

const server = app.listen(1337, function() {
  console.log('Listening on port: ' + 1337);
  if (process.env.ENV !== 'test') return;

  return runTest('http://localhost:1337')
    .then(handleOk)
    .catch(handleError);
});

/**
 * Handle success
 */
const handleOk = function(results) {
  server.close();
  process.exit(0);
};

/**
 * Handle error
 */
const handleError = function(e) {
  server.close();
  console.error(e);
  process.exit(1);
};
