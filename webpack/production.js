import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default (webpackConfig) => {
  // delete webpackConfig.devtool
  webpackConfig.devtool = 'source-map'

  webpackConfig.plugins.push(
    new ExtractTextPlugin('css/[name].[hash:6].css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: true,
      },
    }),
  )

  return webpackConfig
}
