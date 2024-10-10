const bcrypt = require('bcryptjs')
const data = require('../json/super-admin.json')
require('../db-connection/index').mongoDBConnection()

const adminModel = require('../models/admin')

// add super admin
const superAdminData = async () => {
  const hashPassword = bcrypt.hashSync(process.env.UA_PASSWORD, 10)
  data.password = hashPassword
  data.email = process.env.UA_EMAIL
  adminModel.create(data)
}

const addSuperAdmin = async () => {
  const superAdmin = await adminModel.findOne()
  if (superAdmin) {
    console.log('Super-Admin already exist')
  } else {
    await superAdminData()
    console.log('Super-Admin added successfully')
  }
}
addSuperAdmin()
module.exports = addSuperAdmin
