import { env } from '@lab009/app-config'
import base from './default'

export default require(`./${env}`)(base)
