const { Before, When, Then } = require('@cucumber/cucumber')
const pactum = require('pactum')
let spec = pactum.spec()

Before(() => {
  spec = pactum.spec()
})

// * DYNAMIC API CALL TEST
When(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
  spec[method.toLowerCase()](endpoint)
})

// * ADD API BODY
When(/I set body to/, function (body) {
  if (body.includes('check_admin')) {
    body = {
      email: process.env.UA_EMAIL,
      password: process.env.UA_PASSWORD
    }
    body = JSON.stringify(body)
  }

  try {
    spec.withJson(JSON.parse(body))
  } catch (error) {
    spec.withBody(body)
  }
})

// * THEN RECEIVE RESPONSE
Then('I receive a response', async function () {
  await spec.toss()
})

// * CHECKING STATUS CODE
Then('the response should have a status of {int}', code => {
  spec.response().should.have.status(code)
})

// * SET DEFAULT AUTH TOKEN FOR ALL OTHER API CALLS
Then('set authentication token', async () => {
  const response = await spec.toss()
  const token = response.json.data.token
  pactum.request.setDefaultHeaders('Authorization', `Bearer ${token}`)
})

// * COMPARE API RESPONSE WITH PROVIDED RESPONSE
Then(/^the response body should be$/, async json => {
  spec.response().should.have.jsonLike(JSON.parse(json))
})
