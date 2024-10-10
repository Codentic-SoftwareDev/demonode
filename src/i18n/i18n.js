/* eslint-disable space-before-function-paren */
const path = require('path')
const { I18n } = require('i18n')

const en = require('../i18n/locales/en.json')

function languageFunc(language = 'en') {
  return new I18n({
    locales: [en],
    directory: path.join(__dirname, '/locales'),
    defaultLocale: language
  })
}

module.exports = {
  languageFunc
}
