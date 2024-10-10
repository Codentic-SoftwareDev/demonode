const { paraquatLawsuitController: plc } = require('../../controllers/front-end/paraquat-lawsuit')

module.exports = function (app, router) {
  router.post('/paraquat-lawsuit', plc.add)

  app.use('/api', router)
}
