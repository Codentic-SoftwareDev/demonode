const jwt = require('jsonwebtoken')

const { response } = require('../constant')
const message = require('../i18n/locales/en.json')

const loggerUserModel = require('../models/logger-user')

const loggerAuth = () => {
  return async function (req, res, next) {
    try {
      const authHeader = req.headers.authorization

      const bearer = 'Bearer '
      if (!authHeader || !authHeader.startsWith(bearer)) {
        return response(res, false, 401, message.accessDenied)
      }
      const token = authHeader.replace(bearer, '')
      const secretKey = process.env.SECRET_JWT || 'secretAlwaysSecret'
      const decoded = jwt.verify(token, secretKey)

      const loggerUser = await loggerUserModel.findOne({ user_name: decoded.user_name })
      if (loggerUser) {
        req.currentUser = loggerUser
        req.id = loggerUser.id

        return next()
      } else {
        return response(res, false, 401, message.authenticationFailed)
      }
    } catch {
      return response(res, false, 401, message.invalidToken)
    }
  }
}

module.exports = loggerAuth
