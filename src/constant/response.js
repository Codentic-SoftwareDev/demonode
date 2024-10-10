const messages = require('../i18n/locales/en.json')
const responseObj = (res, status = false, statusCode = 500, message = messages.somethingWentWrong, data = {}) => {
  return res.status(statusCode).send({ status, statusCode, message, data })
}

module.exports = responseObj
