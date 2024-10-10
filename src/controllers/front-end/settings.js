const { response } = require('../../constant')
const { logger } = require('../../utils')
const { languageFunc } = require('../../i18n/i18n')

const settingModel = require('../../models/settings')

// list settings
const list = async (req, res) => {
  const i18n = languageFunc(req.language)

  await settingModel
    .find()
    .then(async result => {
      if (!result.length) {
        logger('admin-api', 'warning', req, i18n.__('noSettingExist'))

        return response(res, true, 202, i18n.__('noSettingExist'))
      }
      logger('admin-api', 'info', req, i18n.__('settingList'))

      return response(res, true, 200, i18n.__('settingList'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorSetting'), error)

      return response(res, false, 422, i18n.__('errorSetting'))
    })
}
module.exports.settingsController = {
  list
}
