import fs from 'fs'
import path from 'path'

const errorPage = fs.readFileSync(path.join(__dirname, '/error.html'), 'utf8')

const plainError = (err, req, res, next) => {
  res.end(errorPage)
}

export default plainError
