const { herniaMeshLawsuitController: hmlc } = require('../../controllers/front-end/hernia-mesh-lawsuit')

module.exports = function (app, router) {
  router.post('/hernia-mesh-lawsuit', hmlc.add)

  app.use('/api', router)
}
