const winston = require('winston')
const path = require('path')
const DailyRotateFile = require('winston-daily-rotate-file')

const myFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.align(),
  winston.format.cli(),
  winston.format.simple(),
  winston.format.label({
    label: 'Label🏷️'
  }),
  winston.format.timestamp({
    format: 'DD-MMM,YYYY hh:mm:ss  A'
  }),
  winston.format.prettyPrint(object => {
    JSON.stringify(object)
  }),
  winston.format.errors({ stack: true }),
  winston.format.printf(
    info =>
      `[[${info.timestamp}] [${info.level
        // eslint-disable-next-line no-control-regex
        .replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')
        .toUpperCase()}]: [${info.message}]]`
  )
)

let loggerData = winston.createLogger({})

const dailyLog = (type, level) => {
  let folderPath = ''
  if (type === 'front-end-api') {
    folderPath = 'public/logger/front-end-api'
  } else {
    folderPath = 'public/logger/admin-api'
  }

  loggerData = winston.createLogger({
    transports: [
      new DailyRotateFile({
        filename: path.join(folderPath, '/%DATE%-info.log'),
        format: myFormat,
        colorize: true,
        level,
        maxsize: 50000
      })
    ]
  })
}

const logCreate = (apiType, logType, msg) => {
  if (msg instanceof Error) {
    loggerData.log({ level: logType, message: `${msg.stack || msg}` })
  } else {
    dailyLog(apiType, logType)
    loggerData.log({ level: logType, message: msg })
  }
}

const logger = (apiType, type, req, message = 'Something went wrong', data = []) => {
  const logData = {
    route: req.originalUrl,
    method: req.method,
    responseData: message,
    requestData: data
  }
  const details = JSON.stringify(Object.entries(logData))

  switch (type) {
    case 'info':
      logCreate(apiType, 'info', details)
      break
    case 'warning':
      logCreate(apiType, 'warn', details)
      break
    case 'error':
      logCreate(apiType, 'error', details)
      break
    default:
      logCreate(apiType, 'info', details)
      break
  }
}

module.exports = { logger }
