const { paragardController: pc } = require('../../controllers/admin/paragard-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/paragard-lawsuit', auth(), pc.list)
  router.get('/paragard-lawsuit/:id', auth(), pc.view)
  router.delete('/paragard-lawsuit/:id', auth(), pc.remove)
  router.get('/paragard-lawsuit-export', auth(), pc.exportData)

  app.use('/api', router)
}
