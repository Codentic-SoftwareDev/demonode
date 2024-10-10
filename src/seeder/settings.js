require('../db-connection/index').mongoDBConnection()

const settingModel = require('../models/settings')

// add setting data
const settingData = async () => {
  const data = require('../json/settings.json')
  settingModel.insertMany(data)
}

const addSettings = async () => {
  const setting = await settingModel.findOne()
  if (setting) {
    console.log('Settings already exist')
  } else {
    await settingData()
    console.log('Settings added successfully')
  }
}
addSettings()
module.exports = addSettings
