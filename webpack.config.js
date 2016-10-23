const path = require('path');

const buildDirectory = './dist/';

module.exports = {
  context: __dirname,
  entry: "./lib/yammerLite.jsx",
  output: {
    path: path.resolve(buildDirectory),
    filename: "bundle.js"
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },  
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
