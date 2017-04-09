
var webpack = require('webpack');
require('es6-promise').polyfill();

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    __dirname + '/../app/app.js'
  ],

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: __dirname + '/../app/public/js',
    publicPath: '/js/',
    filename: 'build.js',
    chunkFilename: '[name]-[hash].js'
  },

  devServer: {
    hot: true,
    port: 8000,
    historyApiFallback: true,
    contentBase: "app/public/",
    publicPath: '/js/',
    stats: "errors-only"
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: ["react-hot-loader/babel", "transform-object-rest-spread", "transform-decorators-legacy"],
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
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]


};
