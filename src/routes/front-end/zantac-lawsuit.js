const { zanTacController: ztc } = require('../../controllers/front-end/zantac-lawsuit')

module.exports = function (app, router) {
  router.post('/zantac-lawsuit', ztc.add)

  app.use('/api', router)
}
