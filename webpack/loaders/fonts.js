import { paths } from '@lab009/app-config'

const filenameDevelopment = {
  context: paths.build(),
  name: '[ext]/[name].[ext]',
}

const filenameProduction = {
  context: paths.build(),
  name: '[ext]/[hash:6].[ext]',
}

const createLoader = (filename) => [
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/font-woff2',
    },
  },
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/font-woff',
    },
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url',
    query: {
      ...filename,
      limit: 10000,
      mimetype: 'application/octet-stream',
    },
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file',
    query: {
      ...filename,
    },
  },
]

export const development = createLoader(filenameDevelopment)
export const production = createLoader(filenameProduction)
