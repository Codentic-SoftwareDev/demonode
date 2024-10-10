const { talcumPowderLawsuitController: tplc } = require('../../controllers/admin/talcum-powder-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/talcum-powder-lawsuit', auth(), tplc.list)
  router.get('/talcum-powder-lawsuit/:id', auth(), tplc.view)
  router.delete('/talcum-powder-lawsuit/:id', auth(), tplc.remove)
  router.get('/talcum-powder-lawsuit-export', auth(), tplc.exportData)

  app.use('/api', router)
}
