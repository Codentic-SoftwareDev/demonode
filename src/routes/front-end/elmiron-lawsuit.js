const { elmironLawsuitController: elc } = require('../../controllers/front-end/elmiron-lawsuit')

module.exports = function (app, router) {
  router.post('/elmiron-lawsuit', elc.add)

  app.use('/api', router)
}
