import { paths } from '@lab009/app-config'

const fileLoaderDevelopment = `file?
  context=${paths.build()}
  &name=[ext]/[name]_[hash:6].[ext]`

const fileLoaderProduction = `file?
  context=${paths.build()}
  &name=[ext]/[hash:6].[ext]`

const imgLoader = `image-webpack?
  bypassOnDebug
  &optimizationLevel=7`


export const development = [
  {
    test: /\.(png|ico|jpg|jpeg|gif)$/,
    loader: fileLoaderDevelopment,
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: fileLoaderDevelopment,
  },
]
export const production = [
  {
    test: /\.(jpe?g)$/,
    loaders: [
      fileLoaderProduction,
      `${imgLoader}&interlaced=false`,
    ],
  },
  {
    test: /\.gif$/,
    loaders: [
      fileLoaderProduction,
      `${imgLoader}&interlaced=false`,
    ],
  },
  {
    test: /\.png$/,
    loaders: [
      fileLoaderProduction,
      `${imgLoader}&interlaced=true`,
    ],
  },
  {
    test: /\.svg(\?.*)?$/,
    loaders: [
      fileLoaderProduction,
      `${imgLoader}&interlaced=true`,
    ],
  },
  {
    test: /\.ico$/,
    loader: fileLoaderProduction,
  },
]
