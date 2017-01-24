import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from '@lab009/app-config'


export default (webpackConfig) => {
  webpackConfig.devServer = {
    publicPath: config.publicPath,
    contentBase: config.paths.client(),
    noInfo: true,
    stats: 'errors-only',
    hot: true,
    lazy: false,
  }

  webpackConfig.entry.app.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr'
  )

  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: 'TVEVT',
      template: config.paths.client('assets/index.ejs'),
      favicon: config.paths.client('assets/favicon-32x32.png'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  )

  return webpackConfig
}
