const { userController: uc } = require('../../controllers/admin/user')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.post('/admin', auth(), uc.add)
  router.get('/admin', auth(), uc.list)
  router.get('/admin/:id', auth(), uc.view)
  router.put('/admin/:id', auth(), uc.update)
  router.delete('/admin/:id', auth(), uc.remove)
  router.patch('/admin/:id', auth(), uc.updatePassword)
  router.patch('/status-update/:id', auth(), uc.statusUpdate)

  app.use('/api', router)
}
