const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['.']
  },
  output: {
    filename: 'json-rules-poc-cli.js',
    path: path.join(__dirname, 'dist'),
    library: 'jsonRulesPoc'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.ts(x?)$/, use: 'ts-loader', exclude: /node_modules/ }]
  }
};
