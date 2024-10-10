const { philipsController: pc } = require('../../controllers/front-end/philips-cpap-lawsuit')

module.exports = function (app, router) {
  router.post('/philips-cpap-lawsuit', pc.add)

  app.use('/api', router)
}
