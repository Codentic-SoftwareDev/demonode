const { newsController: nc } = require('../../controllers/admin/news')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.post('/news', auth(), nc.add)
  router.get('/news', auth(), nc.list)
  router.get('/news/:id', auth(), nc.view)
  router.put('/news/:id', auth(), nc.update)
  router.delete('/news/:id', auth(), nc.remove)
  router.get('/news-export', auth(), nc.exportData)

  app.use('/api', router)
}
