const { zanTacController: ztc } = require('../../controllers/admin/zantac-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/zantac-lawsuit', auth(), ztc.list)
  router.get('/zantac-lawsuit/:id', auth(), ztc.view)
  router.delete('/zantac-lawsuit/:id', auth(), ztc.remove)
  router.get('/zantac-lawsuit-export', auth(), ztc.exportData)

  app.use('/api', router)
}
