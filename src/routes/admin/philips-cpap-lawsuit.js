const { philipsController: pc } = require('../../controllers/admin/philips-cpap-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/philips-cpap-lawsuit', auth(), pc.list)
  router.get('/philips-cpap-lawsuit/:id', auth(), pc.view)
  router.delete('/philips-cpap-lawsuit/:id', auth(), pc.remove)
  router.get('/philips-cpap-lawsuit-export', auth(), pc.exportData)

  app.use('/api', router)
}
