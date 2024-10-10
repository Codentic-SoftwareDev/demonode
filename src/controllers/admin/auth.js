const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { response } = require('../../constant')
const { logger, createRefreshJwt } = require('../../utils')
const { languageFunc } = require('../../i18n/i18n')
const adminModel = require('../../models/admin')

// Super Admin login user
const login = async (req, res) => {
  const i18n = languageFunc(req.language)

  const { email, password } = req.body

  const checkSuperAdmin = await adminModel.findOne({ email })
  if (!checkSuperAdmin) {
    logger('admin-api', 'warning', req, i18n.__('invalidCredentials'))

    return response(res, false, 406, i18n.__('invalidCredentials'))
  } else {
    if (!checkSuperAdmin.status) {
      return response(res, false, 202, i18n.__('yourAccountHasBeenBlock'))
    }
    const comparePassword = bcrypt.compareSync(password, checkSuperAdmin.password)
    if (comparePassword) {
      const secretKey = process.env.SECRET_JWT || 'secretAlwaysSecret'
      const refreshTokenSecretKey = process.env.REFRESH_JWT

      const data = {}
      const token = jwt.sign({ email: checkSuperAdmin.email }, secretKey, { expiresIn: '24h' })
      const refreshToken = await createRefreshJwt(checkSuperAdmin.email, null)
      const tokenTime = jwt.verify(token, secretKey)
      const refreshTokenTime = jwt.verify(refreshToken, refreshTokenSecretKey)

      data.token = token
      data.refreshToken = refreshToken
      data.id = checkSuperAdmin.id
      data.role_id = checkSuperAdmin.role_id

      data.tokenTime = tokenTime.exp
      data.refreshTokenTime = refreshTokenTime.exp
      if (!token) {
        logger('admin-api', 'error', req, i18n.__('notTokenFound'))

        return response(res, true, 422, i18n.__('notTokenFound'))
      }
      logger('admin-api', 'info', req, i18n.__('successLogin'), data)

      return response(res, true, 200, i18n.__('successLogin'), data)
    } else {
      logger('admin-api', 'warning', req, i18n.__('invalidCredentials'))

      return response(res, false, 406, i18n.__('invalidCredentials'))
    }
  }
}

// Logout
const logout = async (req, res) => {
  const i18n = languageFunc(req.language)
  res.clearCookie('jwt')

  logger('admin-api', 'info', req, i18n.__('logoutSuccess'))

  return response(res, true, 200, i18n.__('logoutSuccess'))
}

// Verify User JWT and return user data
const verifyToken = async (req, res) => {
  const i18n = languageFunc(req.language)
  const authHeader = req.headers.authorization
  const bearer = 'Bearer '
  if (!authHeader || !authHeader.startsWith(bearer)) {
    return response(res, false, 401, i18n.__('accessDenied'))
  }
  const token = authHeader.replace(bearer, '')
  const secretKey = process.env.SECRET_JWT || 'secretAlwaysSecret'

  try {
    const decoded = jwt.verify(token, secretKey)
    const userData = {}
    if (!decoded) {
      return response(res, false, 401, i18n.__('invalidToken'))
    } else {
      const superAdminLogin = await adminModel.findOne({ email: decoded.email })
      userData.token = token
      userData.id = superAdminLogin.id
      userData.role_id = superAdminLogin.role_id
      userData.token = token

      if (userData) {
        return response(res, true, 200, i18n.__('tokenVerified'), userData)
      } else {
        return response(res, false, 401, i18n.__('invalidToken'))
      }
    }
  } catch (err) {
    return response(res, false, 422, i18n.__('tokenNotMatch'))
  }
}

// Verify refresh Token
const verifyRefreshToken = async (req, res) => {
  const i18n = languageFunc(req.language)
  const refreshToken = req.body.refresh_token
  const refreshTokenSecretKey = process.env.REFRESH_JWT
  try {
    const decoded = jwt.verify(refreshToken, refreshTokenSecretKey)
    const userData = {}
    if (!decoded) {
      return response(res, false, 401, i18n.__('invalidToken'))
    } else {
      userData.refreshToken = refreshToken
      if (userData) {
        return response(res, true, 200, i18n.__('tokenVerified'), userData)
      } else {
        return response(res, false, 401, i18n.__('invalidToken'))
      }
    }
  } catch {
    return response(res, false, 422, i18n.__('tokenNotMatch'))
  }
}

// create token from refresh token
const createTokenFromRefreshToken = async (req, res) => {
  const i18n = languageFunc(req.language)

  const refreshTokenSecretKey = process.env.REFRESH_JWT
  const secretKey = process.env.SECRET_JWT
  const decoded = jwt.verify(req.body.refresh_token, refreshTokenSecretKey)
  const token = jwt.sign({ email: decoded.email }, secretKey, {
    expiresIn: '24h'
  })
  const refreshToken = await createRefreshJwt(null, decoded.email)
  const tokenTime = jwt.verify(token, secretKey)
  const refreshTokenTime = jwt.verify(refreshToken, refreshTokenSecretKey)
  if (!refreshTokenTime) {
    logger('admin-api', 'error', req, i18n.__('invalidToken'))

    return response(res, false, 401, i18n.__('invalidToken'))
  }
  const userData = {}
  userData.token = token
  userData.tokenTime = tokenTime.exp
  userData.refreshTokenTime = refreshTokenTime.exp
  if (userData) {
    logger('admin-api', 'info', req, i18n.__('tokenVerified'), userData)

    return response(res, true, 200, i18n.__('tokenVerified'), userData)
  } else {
    logger('admin-api', 'error', req, i18n.__('invalidToken'))

    return response(res, false, 401, i18n.__('invalidToken'))
  }
}

module.exports.authController = {
  login,
  logout,
  verifyToken,
  verifyRefreshToken,
  createTokenFromRefreshToken
}
