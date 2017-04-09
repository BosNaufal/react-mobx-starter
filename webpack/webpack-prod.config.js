
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  entry: __dirname + '/../app/app.js',

  output: {
    path: __dirname + '/../app/public/js',
    publicPath: '/js/',
    filename: 'build.js',
    chunkFilename: '[name]-[hash].js'
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: ["react-hot-loader/babel", "transform-decorators-legacy", "transform-object-rest-spread"],
          presets: [["es2015", { modules: false }], "react", "stage-1"]
        }
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: 'url-loader',
      },

    ]
  },
  resolve: {
    alias: {
      api: __dirname + '/../app/api',
      assets: __dirname + '/../app/public/assets',
      components: __dirname + '/../app/components',
      containers: __dirname + '/../app/containers'
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]

};
