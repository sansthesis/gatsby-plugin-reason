"use strict";

import { process } from 'bs-loader';

module.exports.resolvableExtensions = () => [".re", ".ml"];

module.exports.modifyWebpackConfig = ({ config }) => {
  config.loader("reason", {
    test: /\.(re|ml)$/,
    loaders: [
      "babel",
      "bs-loader?module=es6"
    ]
  });
};

module.exports.preprocessSource = ({ contents, filename }) => {
  return test.test(filename) ? process(contents, filename) : null;
};
