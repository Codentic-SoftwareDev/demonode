const { view } = require('../../constant')
const message = require('../../i18n/locales/en.json')
const fs = require('fs')

// logger Page View add
const logView = async (req, res) => {
  return res.render(view.loggerView, {
    status: '',
    logData: '',
    message: ''
  })
}

// File Display
const logDisplay = async (req, res) => {
  const fileName = `${req.body.date}-info.log`
  if (fs.existsSync(`public/logger/${req.body.type}/${fileName}`)) {
    const readData = fs.readFileSync(`public/logger/${req.body.type}/${fileName}`, 'utf8')
    if (readData) {
      return res.send({
        status: true,
        logData: readData,
        message: message.fileAvailable
      })
    } else {
      return res.send({
        status: false,
        logData: {},
        message: message.fileNotAvailable
      })
    }
  } else {
    res.send({
      status: false,
      logData: {}
    })
  }
}

// Delete Current Log Using Admin Panel
const deleteLog = async function (req, res, next) {
  const folderName = `${req.body.date}-info.log`
  const filename = `public/logger/${req.body.type}/${folderName}`
  const tempFile = fs.openSync(filename, 'r')
  // try commenting out the following line to see the different behavior
  fs.closeSync(tempFile)

  fs.unlinkSync(filename)
  if (filename) {
    return res.send({
      status: true,
      message: message.fileDeletedSuccessfully
    })
  } else {
    return res.send({
      status: false,
      message: message.fileNotDeleted
    })
  }
}
module.exports.loggerController = {
  logView,
  logDisplay,
  deleteLog
}
