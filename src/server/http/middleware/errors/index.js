import errorHandler from 'errorhandler'
import { env } from '@lab009/app-config'

import plainError from './plainError'


export default process.env.NODE_ENV === 'production' ? plainError : errorHandler()
