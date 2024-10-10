const { dashboardController: dc } = require('../../controllers/admin/dashboard')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/dashboard', auth(), dc.dashBoard)

  app.use('/api', router)
}
