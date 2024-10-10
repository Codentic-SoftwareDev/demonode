const { contactUsController: cuc } = require('../../controllers/admin/contact-us')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/contact-us', auth(), cuc.list)
  router.get('/contact-us-export', auth(), cuc.exportData)
  router.get('/contact-us/:id', auth(), cuc.view)
  router.delete('/contact-us/:id', auth(), cuc.remove)

  app.use('/api', router)
}
