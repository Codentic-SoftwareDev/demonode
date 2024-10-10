require('dotenv').config()
const app = require('express')()
const express = require('express')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const swaggerUI = require('swagger-ui-express')
const expressLayouts = require('express-ejs-layouts')

const authRouter = require('./src/routes/admin/authLogger')

require('./src/db-connection').mongoDBConnection()

const { adminSpecs, frontEndSpecs } = require('./src/api-doc/api')
const router = express.Router()
const PORT = process.env.PORT || 9454

// set api cors
app.use(cors())

// cron job
const cronJobs = require('./src/utils/backup-cron-job')
if (process.env.NODE_ENV !== 'production') {
  cronJobs.createBackUpFile()
  cronJobs.deleteBackUpFile()
}

// parse application/json
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 1000000
  })
)

// Its use for uploading images with specific limit
app.use(fileUpload())
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 1000000
  })
)

const TakticalDigitalMarketingSession = {
  secret: 'TakticalDigitalMarketing',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 60000 * 30
  }
}

// module.exports = io;
app.use(flash())
app.use(session(TakticalDigitalMarketingSession))
// eslint-disable-next-line n/no-path-concat
app.use('/public', express.static(__dirname + '/public'))

app.use('/', authRouter)

// For set layouts of html view
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/layouts', function (req, res) {
  res.render('view')
})
app.get('/', function (req, res) {
  res.send('Welcome to Taktical Digital Marketing')
})

fs.readdirSync(path.join('./src/routes/admin')).forEach(function (file) {
  if (file === 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') return
  const name = file.substr(0, file.indexOf('.'))
  if (name === 'authLogger') {
    return
  }
  require('./src/routes/admin/' + name)(app, router)
})

fs.readdirSync(path.join('./src/routes/front-end')).forEach(function (file) {
  if (file === 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') return
  const name = file.substr(0, file.indexOf('.'))
  require('./src/routes/front-end/' + name)(app, router)
})

fs.readdirSync(path.join('./src/routes/logger')).forEach(function (file) {
  if (file === 'index.js' || file.substr(file.lastIndexOf('.') + 1) !== 'js') return
  const name = file.substr(0, file.indexOf('.'))
  require('./src/routes/logger/' + name)(app, router)
})

app.use('/admin-api', swaggerUI.serveFiles(adminSpecs), swaggerUI.setup(adminSpecs))
app.use('/front-end-api', swaggerUI.serveFiles(frontEndSpecs), swaggerUI.setup(frontEndSpecs))

app.get('*', function (req, res) {
  res.send('Not Found')
})

app.listen(PORT, 'localhost', function () {
  console.log(`listening on port http://localhost:${PORT}`)
})
