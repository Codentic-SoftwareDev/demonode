const { paragardController: pc } = require('../../controllers/front-end/paragard-lawsuit')

module.exports = function (app, router) {
  router.post('/paragard-lawsuit', pc.add)

  app.use('/api', router)
}
