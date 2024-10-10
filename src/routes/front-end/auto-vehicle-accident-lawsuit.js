const {
  autoVehicleAccidentLawsuitController: avalc
} = require('../../controllers/front-end/auto-vehicle-accident-lawsuit')

module.exports = function (app, router) {
  router.post('/auto-vehicle-accident-lawsuit', avalc.add)

  app.use('/api', router)
}
