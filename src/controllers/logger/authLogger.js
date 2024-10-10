const bcrypt = require('bcryptjs')
const { view } = require('../../constant')
const message = require('../../i18n/locales/en.json')

const loggerLogin = require('../../models/logger-user')

const login = function (req, res, next) {
  res.render(view.loginView, {
    session: req.session,
    status: true,
    message: ''
  })
}

// Login
const loggerUser = async function (req, res, next) {
  return res.render(view.loginView, {
    session: req.session,
    status: false,
    message: message.invalidCredentials
  }
}

// Logout
const logout = async function (req, res, next) {
  req.session.destroy(function () {
    res.redirect('/')
  })
}

module.exports = {
  login,
  loggerUser,
  logout
}
