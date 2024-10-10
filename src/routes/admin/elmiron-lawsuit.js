const { elmironLawsuitController: elc } = require('../../controllers/admin/elmiron-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/elmiron-lawsuit', auth(), elc.list)
  router.get('/elmiron-lawsuit-export', auth(), elc.exportData)
  router.get('/elmiron-lawsuit/:id', auth(), elc.view)
  router.delete('/elmiron-lawsuit/:id', auth(), elc.remove)

  app.use('/api', router)
}
