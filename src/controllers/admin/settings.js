const { response } = require('../../constant')
const { logger } = require('../../utils')

const settingModel = require('../../models/settings')

// add settings
const add = async (req, res) => {
  const i18n = req.i18n

  await settingModel
    .create(req.body)
    .then(async result => {
      logger('admin-api', 'info', req, i18n.__('successSettingAdd'), result)

      return response(res, true, 201, i18n.__('successSettingAdd'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorSettingNotAdded'), error)

      return response(res, false, 422, i18n.__('errorSettingNotAdded'))
    })
}

// update settings
const update = async (req, res) => {
  const i18n = req.i18n
  const data = req.body
  for (let i = 0; i < data.length; i++) {
    const updateData = await settingModel.findByIdAndUpdate(data[i]._id, data[i], {
      useFindAndModify: false,
      new: true
    })
    if (!updateData) {
      logger('admin-api', 'error', req, i18n.__('errorSettingNotUpdated'))

      return response(res, false, 422, i18n.__('errorSettingNotUpdated'))
    }
  }
  logger('admin-api', 'info', req, i18n.__('successSettingUpdated'))

  return response(res, true, 201, i18n.__('successSettingUpdated'))
}

// view settings
const view = async (req, res) => {
  const i18n = req.i18n
  await settingModel
    .findById(req.params.id)
    .then(async result => {
      logger('admin-api', 'info', req, i18n.__('viewSetting'), result)

      return response(res, true, 201, i18n.__('viewSetting'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('settingNotFound'), error)

      return response(res, false, 422, i18n.__('settingNotFound'))
    })
}

module.exports.settingsController = {
  add,
  update,
  view
}
