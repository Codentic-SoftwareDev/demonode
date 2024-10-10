require('dotenv').config()

const { request, settings } = require('pactum')
const { BeforeAll } = require('@cucumber/cucumber')

BeforeAll(() => {
  request.setBaseUrl(process.env.BASE_URL + '/api')
  // request.setDefaultHeaders("Authorization", `Bearer ^^TOKEN^^`);
  settings.setReporterAutoRun(false)
})
