const { autoVehicleAccidentLawsuitController: avalc } = require('../../controllers/admin/auto-vehicle-accident-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/auto-vehicle-accident-lawsuit', auth(), avalc.list)
  router.get('/auto-vehicle-accident-lawsuit-export', auth(), avalc.exportData)
  router.get('/auto-vehicle-accident-lawsuit/:id', auth(), avalc.view)
  router.delete('/auto-vehicle-accident-lawsuit/:id', auth(), avalc.remove)

  app.use('/api', router)
}
