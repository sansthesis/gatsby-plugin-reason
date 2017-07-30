const { process } = require(`bs-loader`);

const test = /\.(re|ml)$/;

module.exports.resolvableExtensions = () => [`.re`, `.ml`];

module.exports.modifyWebpackConfig = ({ config }, { compilerOptions }) => {
  config.loader(`reason`, {
    test,
    loaders: [
      `bs-loader`,
    ],
  });
};

module.exports.preprocessSource = (
  { contents, filename },
  { compilerOptions }
) => {
  return test.test(filename)
    ? process(contents, filename)
    : null
};
