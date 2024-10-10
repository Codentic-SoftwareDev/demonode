const { babyFormulaLawsuitController: bflc } = require('../../controllers/admin/baby-formula-lawsuit')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/baby-formula-lawsuit', auth(), bflc.list)
  router.get('/baby-formula-lawsuit-export', auth(), bflc.exportData)
  router.get('/baby-formula-lawsuit/:id', auth(), bflc.view)
  router.delete('/baby-formula-lawsuit/:id', auth(), bflc.remove)

  app.use('/api', router)
}
