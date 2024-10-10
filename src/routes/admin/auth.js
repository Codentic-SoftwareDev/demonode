const { authController: ac } = require('../../controllers/admin/auth')

module.exports = function (app, router) {
  router.post('/login', ac.login)
  router.get('/logout', ac.logout)
  router.get('/verify-token', ac.verifyToken)
  router.get('/verify-refresh-token', ac.verifyRefreshToken)
  router.post('/get-refresh-token', ac.createTokenFromRefreshToken)

  app.use('/api', router)
}
