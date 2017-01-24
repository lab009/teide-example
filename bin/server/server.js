import _debug from 'debug'
import config from '@lab009/app-config'

import server from '../../src/server'

const debug = _debug('app:bin:server')

debug(`Environment is set to: ${process.env.NODE_ENV || 'default'}`)
debug(`Server starting at ${config.http.host}:${config.http.port}`)

server.listen(config.http.port, config.http.host)

