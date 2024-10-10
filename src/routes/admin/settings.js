const { settingsController: sc } = require('../../controllers/admin/settings')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.post('/settings', auth(), sc.add)
  router.get('/settings/:id', auth(), sc.view)
  router.put('/settings', auth(), sc.update)

  app.use('/api', router)
}
