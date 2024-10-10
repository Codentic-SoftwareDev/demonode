const {
  campLejeuneWaterContaminationController: clwcc
} = require('../../controllers/admin/camp-lejeune-water-contamination')
const auth = require('../../middleware/auth.middleware')

module.exports = function (app, router) {
  router.get('/camp-lejeune-water-contamination', auth(), clwcc.list)
  router.get('/camp-lejeune-water-contamination-export', auth(), clwcc.exportData)
  router.get('/camp-lejeune-water-contamination/:id', auth(), clwcc.view)
  router.delete('/camp-lejeune-water-contamination/:id', auth(), clwcc.remove)

  app.use('/api', router)
}
