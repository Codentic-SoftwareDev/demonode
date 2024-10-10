const { loggerController: loc } = require('../../controllers/logger/logger')
const { validateSession } = require('../../middleware/session-middleware')

module.exports = function (app, router) {
  router.get('/get-logger-list', validateSession, loc.logView)
  router.post('/get-logger-list', validateSession, loc.logDisplay)
  router.post('/delete-logger', validateSession, loc.deleteLog)

  app.use('/', router)
}
