const webpackLodashPlugin = require("lodash-webpack-plugin");

// Add Lodash plugin
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      plugins: [webpackLodashPlugin],
    });
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-proposal-class-properties`,
    options: { loose: true },
  });
  actions.setBabelPlugin({
    name: `@babel/plugin-proposal-private-methods`,
    options: { loose: true },
  });
};
