const bcrypt = require('bcryptjs')

const { response } = require('../../constant')
const { logger } = require('../../utils')

const adminModel = require('../../models/admin')

// add Admin
const add = async (req, res) => {
  const i18n = req.i18n
  const hashPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashPassword
  req.body.role = 'Admin'
  req.body.role_id = 2
  await adminModel
    .create(req.body)
    .then(async result => {
      logger('admin-api', 'info', req, i18n.__('successAdminAdd'), result)

      return response(res, true, 201, i18n.__('successAdminAdd'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorAdminNotAdded'), error)

      return response(res, false, 422, i18n.__('errorAdminNotAdded'))
    })
}

// list Admin
const list = async (req, res) => {
  const i18n = req.i18n
  const page = parseInt(req.query.page)
  const itemsPerPage = parseInt(req.query.items_per_page)
  const offset = (page - 1) * itemsPerPage
  await adminModel
    .find()
    .skip(offset)
    .limit(itemsPerPage)
    .then(async result => {
      const totalRecords = await adminModel.count()
      const totalPage = Math.ceil(totalRecords / itemsPerPage)
      const startIndex = (page - 1) * itemsPerPage + 1
      const endIndex = page * itemsPerPage
      const firstPageUrl = `/?page=${req.query.page}`
      let prevPageUrl
      if (page === 1) {
        prevPageUrl = null
      } else {
        prevPageUrl = `/?page=${page - 1}`
      }

      const lastPage = totalPage
      let nextPageUrl
      if (lastPage === page) {
        nextPageUrl = null
      } else {
        nextPageUrl = `/?page=${page + 1}`
      }

      const links = []

      for (let i = 1; i <= totalPage; i++) {
        // ------ previous page
        if (i === 1) {
          const obj = {
            url: page !== 1 ? `/?page=${page - 1}` : `/?page=${1}`,
            label: '&laquo; Previous'
            // active: page !== 1 ? false : true
            // page: page !== 1 ? page - 1 : 1
          }
          links.push(obj)
        }
        // ------ pages
        const obj = {
          url: `/?page=${i}`,
          label: i,
          active: page === i,
          page: i
        }
        links.push(obj)

        // --------- next page
        if (i === totalPage) {
          const obj = {
            url: page !== totalPage ? `/?page=${page + 1}` : `/?page=${totalPage}`,
            label: 'Next &raquo;',
            active: page === totalPage,
            page: page !== totalPage ? page + 1 : totalPage
          }
          links.push(obj)
        }
      }
      const payload = {
        pagination: {
          first_page_url: firstPageUrl,
          from: startIndex,
          items_per_page: itemsPerPage,
          last_page: lastPage,
          links,
          next_page_url: nextPageUrl,
          page,
          prev_page_url: prevPageUrl,
          to: endIndex,
          total: totalRecords
        }
      }
      if (!result.length) {
        logger('admin-api', 'warning', req, i18n.__('noAdminExist'))

        return response(res, true, 202, i18n.__('noAdminExist'))
      }
      logger('admin-api', 'info', req, i18n.__('adminList'))

      return response(res, true, 200, i18n.__('adminList'), { data: result, payload })
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorAdmins'), error)

      return response(res, false, 422, i18n.__('errorAdmins'))
    })
}

// update Admin
const update = async (req, res) => {
  const i18n = req.i18n
  if (req.body.role === 'SuperAdmin' || req.body.role_id === 1) {
    const superAdmin = await adminModel.findOne({ role: 'SuperAdmin' })
    if (superAdmin) {
      logger('admin-api', 'warning', req, i18n.__('invalidRole'))

      return response(res, false, 406, i18n.__('invalidRole'))
    }
  }
  await adminModel
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true })
    .then(async result => {
      if (!result) {
        logger('admin-api', 'warning', req, i18n.__('adminNotUpdated'))

        return response(res, true, 202, i18n.__('adminNotUpdated'))
      }
      logger('admin-api', 'info', req, i18n.__('successAdminUpdated'), result)

      return response(res, true, 201, i18n.__('successAdminUpdated'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorAdminNotUpdated'), error)

      return response(res, false, 422, i18n.__('errorAdminNotUpdated'))
    })
}

// remove/delete Admin
const remove = async (req, res) => {
  const i18n = req.i18n
  const id = req.params.id
  if (req.role === 'SuperAdmin') {
    await adminModel
      .findByIdAndRemove(id, { useFindAndModify: false })
      .then(result => {
        if (!result) {
          logger('admin-api', 'warning', req, i18n.__('noAdminExist'))

          return response(res, true, 202, i18n.__('noAdminExist'))
        }
        logger('admin-api', 'info', req, i18n.__('successAdminDelete'), result)

        return response(res, true, 200, i18n.__('successAdminDelete'), result)
      })
      .catch(error => {
        logger('admin-api', 'error', req, i18n.__('errorAdmin'), error)

        return response(res, false, 422, i18n.__('errorAdmin'))
      })
  } else {
    logger('admin-api', 'waring', req, i18n.__('noAdminExist'))

    return response(res, true, 401, i18n.__('noAdminExist'))
  }
}

// view Admin
const view = async (req, res) => {
  const i18n = req.i18n
  await adminModel
    .findById(req.params.id)
    .then(async result => {
      logger('admin-api', 'info', req, i18n.__('viewAdmin'), result)

      return response(res, true, 200, i18n.__('viewAdmin'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('adminNotFound'), error)

      return response(res, false, 422, i18n.__('adminNotFound'))
    })
}

// update Password
const updatePassword = async (req, res) => {
  const i18n = req.i18n
  const hashPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashPassword
  await adminModel
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true })
    .then(async result => {
      if (!result) {
        logger('admin-api', 'warning', req, i18n.__('adminNotUpdated'))

        return response(res, true, 202, i18n.__('adminNotUpdated'))
      }
      logger('admin-api', 'info', req, i18n.__('successAdminPassUpdated'), result)

      return response(res, true, 201, i18n.__('successAdminPassUpdated'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorAdminPassNotUpdated'), error)

      return response(res, false, 422, i18n.__('errorAdminPassNotUpdated'))
    })
}

// status update of admin
const statusUpdate = async (req, res) => {
  const i18n = req.i18n
  if (req.role_id === 1) {
    await adminModel
      .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true })
      .then(async result => {
        if (!result) {
          logger('admin-api', 'warning', req, i18n.__('adminNotUpdated'))

          return response(res, true, 202, i18n.__('adminNotUpdated'))
        }
        logger('admin-api', 'info', req, i18n.__('successAdminUpdated'), result)

        return response(res, true, 201, i18n.__('successAdminUpdated'), result)
      })
      .catch(error => {
        logger('admin-api', 'error', req, i18n.__('errorAdminNotUpdated'), error)

        return response(res, false, 422, i18n.__('errorAdminNotUpdated'))
      })
  } else {
    logger('admin-api', 'error', req, i18n.__('accessDenied'))

    return response(res, false, 401, i18n.__('accessDenied'))
  }
}

module.exports.userController = {
  add,
  list,
  update,
  remove,
  view,
  updatePassword,
  statusUpdate
}
