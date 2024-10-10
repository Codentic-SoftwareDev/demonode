const { roundupKillerController: rkc } = require('../../controllers/admin/roundup-killer')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/roundup-killer', auth(), rkc.list)
  router.get('/roundup-killer/:id', auth(), rkc.view)
  router.delete('/roundup-killer/:id', auth(), rkc.remove)
  router.get('/roundup-killer-export/', auth(), rkc.exportData)

  app.use('/api', router)
}
