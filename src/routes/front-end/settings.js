const { settingsController: sc } = require('../../controllers/front-end/settings')

module.exports = function (app, router) {
  router.get('/settings', sc.list)

  app.use('/api', router)
}
