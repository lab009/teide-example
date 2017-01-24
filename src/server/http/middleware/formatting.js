import compress from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { compose } from 'compose-middleware'
import config from '@lab009/app-config'

export default compose([
  compress(),
  bodyParser.json({
    strict: true,
    limit: '10mb',
  }),
  cookieParser(config.cookie.secret),
])
