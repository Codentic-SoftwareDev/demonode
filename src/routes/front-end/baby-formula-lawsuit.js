const { babyFormulaLawsuitController: bflc } = require('../../controllers/front-end/baby-formula-lawsuit')

module.exports = function (app, router) {
  router.post('/baby-formula-lawsuit', bflc.add)

  app.use('/api', router)
}
