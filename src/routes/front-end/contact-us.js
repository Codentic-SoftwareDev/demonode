const { freeCaseEvaluationController: fcec } = require('../../controllers/front-end/contact-us')

module.exports = function (app, router) {
  router.post('/contact-us', fcec.add)

  app.use('/api', router)
}
