const message = require('../i18n/locales/en.json')

exports.validateSession = async (req, res, next) => {
  const user = req.session

  if (user.currentUser) {
    return next()
  } else {
    req.session.error = message.sessionExpired
    res.redirect('/')
  }
}
