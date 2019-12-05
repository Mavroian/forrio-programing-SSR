
const path = require('path');

module.exports = {
  // inform webpack we are bulding a bundle
  //for Node.js rather than for the browser
  target: "node",

  //root file 
  entry: "./src/index.js",

  //where to output

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //run bable on every js file,

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
    ]
  }
}