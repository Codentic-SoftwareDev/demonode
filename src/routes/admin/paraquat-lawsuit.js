const { paraquatLawsuitController: plc } = require('../../controllers/admin/paraquat-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/paraquat-lawsuit', auth(), plc.list)
  router.get('/paraquat-lawsuit/:id', auth(), plc.view)
  router.delete('/paraquat-lawsuit/:id', auth(), plc.remove)
  router.get('/paraquat-lawsuit-export/', auth(), plc.exportData)

  app.use('/api', router)
}
