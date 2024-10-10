const bcrypt = require('bcryptjs')
require('../db-connection/index').mongoDBConnection()

const loggerUserModel = require('../models/logger-user')

// add logger user
const loggerUserData = async () => {
  const hashPassword = bcrypt.hashSync(process.env.LOG_PASSWORD, 10)
  const obj = {
    user_name: process.env.LOG_USER_NAME,
    password: hashPassword
  }
  loggerUserModel.create(obj)
}

const addLoggerUser = async () => {
  const loggerUser = await loggerUserModel.findOne()
  if (loggerUser) {
    console.log('Logger user already exist')
  } else {
    await loggerUserData()
    console.log('Logger user added successfully')
  }
}
addLoggerUser()
module.exports = addLoggerUser
