const cron = require('node-cron')
const fsx = require('fs-extra')
const moment = require('moment')
const fs = require('fs')
const mongoose = require('mongoose')
const { spawn } = require('child_process')

// create backup file every day at 6 AM
exports.createBackUpFile = async (req, res) => {
  cron.schedule('0 23 * * 6', async () => {
    try {
      const todaysDate = moment().format('YYYY-MM-DD HH-mm A')

      const mongoDbDir = 'public/backup/mongodb'

      if (!fs.existsSync(mongoDbDir)) {
        fs.mkdirSync(mongoDbDir, { recursive: true })
      }

      // Backup of MongoDB database
      mongoose
        .connect(process.env.MG_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => {
          const collectionName = Object.keys(mongoose.connection.collections)
          const mongoDbName = mongoose.connections[0].name
          collectionName.forEach(async c => {
            const tableNames = c
            await spawn('mongoexport', [
              '--db',
              mongoDbName,
              '--collection',
              tableNames,
              '--jsonArray',
              '--pretty',
              `--out=./${mongoDbDir}/${todaysDate}/${tableNames}.json`
            ])
          })
        })
        .catch(error => {
          console.log('error in creating mongodb backup file', error)
        })
    } catch (error) {
      console.log(`${error} - in cron while creating backup file`)
    }
  })
}

// delete backup file every day AT 6 AM
exports.deleteBackUpFile = async (req, res) => {
  cron.schedule('0 23 * * 1-7', async () => {
    try {
      const mongoDbDir = 'public/backup/mongodb'

      const fileToDelete = moment().subtract(30, 'days').format('YYYY-MM-DD HH-mm A')

      fs.readdirSync('public/backup/mongodb').forEach(function (mongoDbFile) {
        if (fileToDelete >= mongoDbFile) {
          fsx.remove(`${mongoDbDir}/${mongoDbFile}`)
        }
      })
    } catch (error) {
      console.log(`${error} - in cron while deleting backup file`)
    }
  })
}
