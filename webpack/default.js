import requireDir from 'require-dir'
import webpack from 'webpack'
import AppConfigPlugin from '@lab009/app-config/webpack'
import config from '@lab009/app-config'


const lFolder = requireDir('./loaders')
const loaders = Object.keys(lFolder)
  .map(k => lFolder[k])
  .map(loader => (Array.isArray(loader) ? loader : loader[config.env]))
  .reduce((p, loader) => p.concat(loader), [])

const initialState = {}

const globals = {
  __INITIAL_STATE__: JSON.stringify(initialState),
  'process.env.NODE_ENV': JSON.stringify(config.env),
  __DEV__: config.env === 'development', // used in react
  __PROD__: config.env === 'production', // used in react
}

const webpackConfig = {
  name: 'site',
  target: 'web',
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',

  entry: {
    app: [
      config.paths.client('index.js'),
    ],
  },

  output: {
    filename: 'js/[name].[hash:6].js',
    chunkFilename: 'js/[id].[hash:6].js',
    path: config.paths.build(),
    publicPath: config.publicPath,
  },

  plugins: [
    new webpack.DefinePlugin(globals),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ru)$/),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new AppConfigPlugin(),
  ],

  resolve: {
    modulesDirectories: ['shared', 'local_modules', 'node_modules'],
    root: config.paths.client(),
    extensions: ['', '.js', '.jsx', '.styl'],
  },

  module: {
    loaders,
  },

}

export default webpackConfig
