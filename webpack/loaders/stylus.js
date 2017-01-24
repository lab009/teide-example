import ExtractTextPlugin from 'extract-text-webpack-plugin'

const cssLoader = 'css?sourceMap&importLoaders=1!stylus?url resolve'
const cssLoaderModules = 'css?sourceMap&modules&localIdentName=[local]__[hash:base64:5]&importLoaders=1!stylus?url resolve'

export const development = [
  {
    test: /\.raw\.styl$/,
    loader: `style!${cssLoader}`,
  },
  {
    test: /^((?!\.raw).)*\.styl$/,
    loader: `style!${cssLoaderModules}`,
  },
]

export const production = [
  {
    test: /\.raw\.styl$/,
    loader: ExtractTextPlugin.extract('style', cssLoader),
  },
  {
    test: /^((?!\.raw).)*\.styl$/,
    loader: ExtractTextPlugin.extract('style', cssLoaderModules),
  },
]
