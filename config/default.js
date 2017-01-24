import path from 'path'

const basePath = path.resolve(__dirname, '../')
const config = {
  // core stuff
  env: process.env.NODE_ENV,

  paths: {
    base: (file = '') => path.join(basePath, file),
    client: (file = '') => path.join(basePath, 'src', 'client', file),
    build: (file = '') => path.join(basePath, 'build', file),
    dist: (file = '') => path.join(basePath, 'dist', file),
    server: (file = '') => path.join(basePath, 'src', 'server', file),
  },

  publicPath: '/static/',

  // http stuff
  http: {
    host: 'localhost',
    port: process.env.PORT || 4000,
  },

  cookie: {
    name: 'x',
    secret: 'cookie-secret',
  },
}

export default config
