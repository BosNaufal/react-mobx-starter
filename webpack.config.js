var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/main.js'
  ],

  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  devServer: {
    hot: true,
    contentBase: __dirname,
    publicPath: '/build/',
    stats: "errors-only"
  },


  module: {

    loaders: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [["es2015", { modules: false }], "react"],
          plugins: ["react-hot-loader/babel", "transform-object-rest-spread"]
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]

};
