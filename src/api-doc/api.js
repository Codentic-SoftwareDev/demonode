const swaggerJsDoc = require('swagger-jsdoc')

const serverList = process.env.BASE_URL || ''
const serversUrl = serverList.split(',').map(item => {
  return { url: item.trim() }
})

const adminSpecs = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Lawsuit-API's",
      version: '1.0.0',
      description: 'for admin panel'
    },
    servers: serversUrl,
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/api-doc/admin/*.js']
})

const frontEndSpecs = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Front End API's",
      version: '1.0.0',
      description: 'for front end'
    },
    servers: serversUrl,
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/api-doc/front-end/*.js']
})

module.exports = {
  adminSpecs,
  frontEndSpecs
}
