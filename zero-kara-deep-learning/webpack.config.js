var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
 resolve: {
   alias: {
     // 'vue-onsenui': path.join(__dirname, 'src'),
     // 'onsenui': path.join(__dirname, '..', '..', 'build', 'js', 'onsenui'),
     'vue$': 'vue/dist/vue.common.js'
   }
 },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /onsenui\.js/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}
