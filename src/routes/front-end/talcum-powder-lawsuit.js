const { talcumPowderLawsuitController: tplc } = require('../../controllers/front-end/talcum-powder-lawsuit')

module.exports = function (app, router) {
  router.post('/talcum-powder-lawsuit', tplc.add)

  app.use('/api', router)
}
