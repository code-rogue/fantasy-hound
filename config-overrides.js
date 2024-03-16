const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@app': path.resolve(__dirname, 'src/app'),
    '@auth': path.resolve(__dirname, 'src/auth'),
    '@css': path.resolve(__dirname, 'src/css'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@redux': path.resolve(__dirname, 'src/redux'),
    '@root': path.resolve(__dirname, '../'),
    '@src': path.resolve(__dirname, 'src')
  })
);