import ExtractTextPlugin from 'extract-text-webpack-plugin'

const cssLoaderModules = 'css?sourceMap&modules'
const cssLoader = 'css?sourceMap'

export const development = [
  {
    test: /\.css$/,
    loader: `style!${cssLoaderModules}`,
    include: [/react-notify-me/],
  },
  {
    test: /\.css$/,
    loader: `style!${cssLoader}`,
    exclude: [/react-notify-me/],
  },
]

export const production = [
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', cssLoaderModules),
    include: [/react-notify-me/],
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', cssLoader),
    exclude: [/react-notify-me/],
  },
]
