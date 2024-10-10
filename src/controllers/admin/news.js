const fs = require('fs')
const moment = require('moment')
const Json2csvParser = require('json2csv').Parser
const fsx = require('fs-extra')

const { response, path } = require('../../constant')
const { logger, imageUpload, generateNumber } = require('../../utils')

const newsModel = require('../../models/news')

// add news
const add = async (req, res) => {
  const i18n = req.i18n
  if (req.files) {
    if (req.files.image) {
      const imageDir = path.imageDir
      const uploadImage = await imageUpload(req.files.image, imageDir, 'news', res)
      if (uploadImage.response) {
        logger('admin-api', 'error', req, i18n.__('errorImageNotUpload'))

        return response(res, false, 422, i18n.__('errorImageNotUpload'))
      }
      req.body.image = uploadImage.image
    }
  }
  req.body.date = moment().format('YYYY-MM-DD')
  await newsModel
    .create(req.body)
    .then(async result => {
      logger('admin-api', 'info', req, i18n.__('successNewsAdd'), result)

      return response(res, true, 201, i18n.__('successNewsAdd'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorNewsNotAdded'), error)

      return response(res, false, 422, i18n.__('errorNewsNotAdded'))
    })
}

// list news
const list = async (req, res) => {
  const i18n = req.i18n
  const page = parseInt(req.query.page)
  const itemsPerPage = parseInt(req.query.items_per_page)
  const offset = (page - 1) * itemsPerPage
  const name = req.query.name
  const condition = name ? { name } : {}
  await newsModel
    .find(condition, {
      title: 1,
      slug: 1,
      details: 1,
      image: {
        $concat: [`${path.imageDir}/`, '$image']
      }
    })
    .skip(offset)
    .limit(itemsPerPage)
    .then(async result => {
      const totalRecords = await newsModel.count()
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
        logger('admin-api', 'warning', req, i18n.__('noNewsExist'))

        return response(res, true, 202, i18n.__('noNewsExist'))
      }
      logger('admin-api', 'info', req, i18n.__('newsList'))

      return response(res, true, 200, i18n.__('newsList'), { data: result, payload })
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorNews'), error)

      return response(res, false, 422, i18n.__('errorNews'))
    })
}

// update news
const update = async (req, res) => {
  const i18n = req.i18n
  if (req.files) {
    if (req.files.image) {
      const imageDir = req.body.image
      if (imageDir) {
        const filePath = `${path.imageDir}/` + imageDir
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
        }
      }
      const uploadImage = await imageUpload(req.files.image, path.imageDir, 'news', res)
      if (uploadImage.response) {
        logger('admin-api', 'error', req, i18n.__('errorImageNotUpload'))

        return response(res, false, 422, i18n.__('errorImageNotUpload'))
      }
      req.body.image = uploadImage.image
    }
  }

  await newsModel
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true })
    .then(async result => {
      if (!result) {
        logger('admin-api', 'warning', req, i18n.__('newsNotUpdated'))

        return response(res, true, 202, i18n.__('newsNotUpdated'))
      }
      logger('admin-api', 'info', req, i18n.__('successNewsUpdated'), result)

      return response(res, true, 201, i18n.__('successNewsUpdated'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorNewsNotUpdated'), error)

      return response(res, false, 422, i18n.__('errorNewsNotUpdated'))
    })
}

// remove/delete news
const remove = async (req, res) => {
  const i18n = req.i18n
  await newsModel
    .findByIdAndRemove(req.params.id, { useFindAndModify: false })
    .then(result => {
      if (!result) {
        logger('admin-api', 'warning', req, i18n.__('noNewsExist'))

        return response(res, true, 202, i18n.__('noNewsExist'))
      }
      logger('admin-api', 'info', req, i18n.__('successNewsDelete'), result)

      return response(res, true, 200, i18n.__('successNewsDelete'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorNews'), error)

      return response(res, false, 422, i18n.__('errorNews'))
    })
}

// view news
const view = async (req, res) => {
  const i18n = req.i18n
  await newsModel
    .findById(req.params.id, {
      title: 1,
      details: 1,
      slug: 1,
      image: {
        $concat: [`${path.imageDir}/`, '$image']
      }
    })
    .then(async result => {
      logger('admin-api', 'info', req, i18n.__('viewNews'), result)

      return response(res, true, 200, i18n.__('viewNews'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('newsNotFound'), error)

      return response(res, false, 422, i18n.__('newsNotFound'))
    })
}

// export data from .csv file
const exportData = async (req, res) => {
  const i18n = req.i18n

  await newsModel
    .find(
      {},
      {
        _id: 0,
        title: 1,
        details: 1,
        slug: 1,
        image: 0,
        created_at: { $dateToString: { format: '%d-%m-%Y', date: '$created_at' } }
      }
    )
    .lean()
    .exec((err, data) => {
      if (err) throw err
      const csvFields = []
      const json2csvParser = new Json2csvParser({
        csvFields
      })
      const csvData = json2csvParser.parse(data)
      const dummyName = generateNumber(10)
      const fileName = 'news-' + dummyName + '.csv'
      const excelFileDir = 'public/upload/news-excel-file'
      if (!fs.existsSync(excelFileDir)) {
        fs.mkdirSync(excelFileDir, { recursive: true })
      }
      const filePath = 'public/upload/news-excel-file/' + fileName
      fsx.outputFile(filePath, csvData, err => {
        if (err) {
          logger('admin-api', 'error', req, i18n.__('errorExportFile'))

          return response(res, false, 422, i18n.__('errorExportFile'), err)
        }
      })
      logger('admin-api', 'info', req, i18n.__('exportFile'))

      return response(res, true, 201, i18n.__('exportFile'), filePath)
    })
}

module.exports.newsController = {
  add,
  list,
  update,
  remove,
  view,
  exportData
}
