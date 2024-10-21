const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    'url': 'url-polyfill',
    'http': 'stream-http',
    'https': 'https-browserify'
  })
);