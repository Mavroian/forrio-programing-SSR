
const path = require('path');
module.exports = {

  //root file 
  entry: "./src/client/client.js",

  //where to output

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
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
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],

  },


}