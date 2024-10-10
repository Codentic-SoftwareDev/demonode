const express = require('express')
const authRouter = express.Router()
const auth = require('../../controllers/logger/authLogger')

authRouter.get('/', auth.login)
authRouter.get('/login', auth.login)
authRouter.post('/login', auth.loggerUser)
authRouter.get('/logout', auth.logout)

module.exports = authRouter
