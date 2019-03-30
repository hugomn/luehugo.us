const webpackLodashPlugin = require('lodash-webpack-plugin');

// Add Lodash plugin
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [webpackLodashPlugin],
    });
  }
};
