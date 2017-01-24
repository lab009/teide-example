1
import http from 'http'
import express from 'express'
import config from '@lab009/app-config'

// middleware is required instead of imported
// so we can conditionally load deps

const app = express()
app.disable('x-powered-by')

// middleware stack
app.use(require('./middleware/formatting'))

// final piece - serve static content
app.use(require('./middleware/spa'))

if (config.env === 'development') {
  app.use(require('./middleware/webpack'))
} else {
  app.use(config.publicPath, express.static(config.paths.build(), { maxAge: '200d' }))
}

app.use(require('./middleware/errors'))

const httpServer = http.createServer(app)

export default httpServer
