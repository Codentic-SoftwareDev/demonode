const jwt = require('jsonwebtoken')

const { response } = require('../constant')
const message = require('../i18n/locales/en.json')
const { languageFunc } = require('../i18n/i18n')
const { logger } = require('../utils')

const adminModel = require('../models/admin')

const auth = () => {
  return async function (req, res, next) {
    try {
      const authHeader = req.headers.authorization

      const bearer = 'Bearer '
      if (!authHeader || !authHeader.startsWith(bearer)) {
        logger('admin-api', 'warning', req, message.accessDenied)

        return response(res, false, 401, message.accessDenied)
      }
      const token = authHeader.replace(bearer, '')
      const secretKey = process.env.SECRET_JWT || 'secretAlwaysSecret'

      // Verify Token
      const decoded = jwt.verify(token, secretKey)
      if (decoded.email) {
        const usersDetails = await adminModel.findOne({ email: decoded.email })
        req.usersDetails = usersDetails
        req.id = usersDetails.id
        req.role_id = usersDetails.role_id
        req.role = usersDetails.role
        req.i18n = languageFunc(req.headers.language)

        return next()
      }
    } catch {
      logger('admin-api', 'error', req, message.invalidToken)

      return response(res, false, 401, message.invalidToken)
    }
  }
}

module.exports = auth
