const moment = require('moment')
const { languageFunc } = require('../../i18n/i18n')

const { response } = require('../../constant')
const { logger } = require('../../utils')

const contactUsModel = require('../../models/contact-us')

// Add free case evaluation
const add = async (req, res) => {
  const i18n = languageFunc(req.language)
  req.body.date = moment().format('YYYY-MM-DD')
  await contactUsModel
    .create(req.body)
    .then(result => {
      logger('front-end-api', 'info', req, i18n.__('dataAddSuccess'), result)

      return response(res, true, 201, i18n.__('dataAddSuccess'), result)
    })
    .catch(error => {
      logger('front-end-api', 'error', req, i18n.__('dataAddError'), error)

      return response(res, false, 422, i18n.__('dataAddError'))
    })
}

module.exports.freeCaseEvaluationController = {
  add
}