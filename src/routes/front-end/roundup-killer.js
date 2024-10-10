const { roundupKillerController: rkc } = require('../../controllers/front-end/roundup-killer')

module.exports = function (app, router) {
  router.post('/roundup-killer', rkc.add)

  app.use('/api', router)
}
