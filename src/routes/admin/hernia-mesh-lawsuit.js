const { herniaMeshLawsuitController: hmlc } = require('../../controllers/admin/hernia-mesh-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/hernia-mesh-lawsuit', auth(), hmlc.list)
  router.get('/hernia-mesh-lawsuit-export', auth(), hmlc.exportData)
  router.get('/hernia-mesh-lawsuit/:id', auth(), hmlc.view)
  router.delete('/hernia-mesh-lawsuit/:id', auth(), hmlc.remove)

  app.use('/api', router)
}
