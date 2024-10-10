const fs = require('fs')
const jwt = require('jsonwebtoken')

const { response, message } = require('../constant')

const generateNumber = length => {
  let result = ''
  const characters = '0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

const checkValidation = errors => {
  const error = errors.errors
  const errArr = []
  for (let i = 0; i < error.length; i++) {
    if (errArr.length) {
      let isRequire = false
      for (let j = 0; j < errArr.length; j++) {
        if (errArr[j].param === error[i].param) {
          isRequire = true
        }
      }
      if (!isRequire) {
        errArr.push(error[i])
      }
    } else {
      errArr.push(error[i])
    }
  }

  return errArr
}

const imageUpload = async (file, dirName, prefix, res) => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    const generateName = generateNumber(10)
    const imageName = `${prefix}-` + generateName + '.png'

    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName, { recursive: true })
    }
    const promise = await new Promise(function (resolve, reject) {
      file.mv(`${dirName}/` + imageName, async function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(null)
        }
      })
    })

    return { response: promise, image: imageName }
  } else {
    return response(res, false, 415, message.invalidImageType)
  }
}

// Info: ValidateEmail
const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const generateUID = (lastRecord, prefix) => {
  let uId = ''
  if (!lastRecord) {
    uId = `${prefix}1000001`
  } else {
    const lastDataUid = lastRecord.u_id ? lastRecord.u_id : null
    uId = prefix + (Number(lastDataUid.slice(3)) + 1)
  }

  return uId
}

const createRefreshJwt = async (email, phone) => {
  const refreshTokenSecretKey = process.env.REFRESH_JWT || 'secretOrPrivateKey'
  if (phone) {
    const refreshToken = jwt.sign(
      {
        phone
      },
      refreshTokenSecretKey,
      {
        expiresIn: '365d'
      }
    )

    return refreshToken
  } else {
    const refreshToken = jwt.sign(
      {
        email
      },
      refreshTokenSecretKey,
      {
        expiresIn: '365d'
      }
    )

    return refreshToken
  }
}

module.exports = {
  checkValidation,
  generateNumber,
  imageUpload,
  validateEmail,
  generateUID,
  createRefreshJwt
}
