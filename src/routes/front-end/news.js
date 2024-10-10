const { newsController: nc } = require('../../controllers/front-end/news')

module.exports = function (app, router) {
  router.get('/get-news', nc.list)
  router.get('/get-news/:id', nc.view)

  app.use('/api', router)
}
