
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./nextjs-basic-auth.cjs.production.min.js')
} else {
  module.exports = require('./nextjs-basic-auth.cjs.development.js')
}
