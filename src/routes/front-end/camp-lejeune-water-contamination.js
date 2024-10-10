const {
  campLejeuneWaterContaminationController: clwcc
} = require('../../controllers/front-end/camp-lejeune-water-contamination')

module.exports = function (app, router) {
  router.post('/camp-lejeune-water-contamination', clwcc.add)

  app.use('/api', router)
}
