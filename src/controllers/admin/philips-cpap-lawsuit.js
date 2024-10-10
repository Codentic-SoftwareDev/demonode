const fs = require('fs')
const Json2csvParser = require('json2csv').Parser
const fsx = require('fs-extra')

const { response } = require('../../constant')
const { logger, generateNumber } = require('../../utils')

const philipsLawsuit = require('../../models/philip-cpap-lawsuit')

// List paragard Lawsuit
const list = async (req, res) => {
  const i18n = req.i18n
  const page = parseInt(req.query.page)
  const itemsPerPage = parseInt(req.query.items_per_page)
  const offset = (page - 1) * itemsPerPage
  await philipsLawsuit
    .find()
    .skip(offset)
    .limit(itemsPerPage)
    .then(async result => {
      const totalRecords = await philipsLawsuit.count()
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
        logger('admin-api', 'warning', req, i18n.__('listNotFound'))

        return response(res, true, 202, i18n.__('listNotFound'), result)
      }
      logger('admin-api', 'info', req, i18n.__('listFound'))

      return response(res, true, 200, i18n.__('listFound'), { data: result, payload })
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('dataNotList'), error)

      return response(res, false, 422, i18n.__('dataNotList'))
    })
}

// View philips Lawsuit
const view = async (req, res) => {
  const i18n = req.i18n

  await philipsLawsuit
    .findById(req.params.id)
    .then(async result => {
      if (!result) {
        logger('admin-api', 'warning', req, i18n.__('dataNotFound'))

        return response(res, true, 202, i18n.__('dataNotFound'))
      }
      logger('admin-api', 'info', req, i18n.__('dataView'))

      return response(res, true, 200, i18n.__('dataView'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('dataNotView'), error)

      return response(res, false, 422, i18n.__('dataNotView'))
    })
}

// remove/delete philips Lawsuit
const remove = async (req, res) => {
  const i18n = req.i18n

  await philipsLawsuit
    .findByIdAndRemove(req.params.id)
    .then(async result => {
      if (!result) {
        logger('admin-api', 'warning', req, i18n.__('dataNotFound'))

        return response(res, true, 202, i18n.__('dataNotFound'))
      }
      logger('admin-api', 'info', req, i18n.__('dataDelete'))

      return response(res, true, 200, i18n.__('dataDelete'))
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('dataNotDelete'), error)

      return response(res, false, 422, i18n.__('dataNotDelete'))
    })
}

// export data from .csv file
const exportData = async (req, res) => {
  const i18n = req.i18n

  await philipsLawsuit
    .find(
      {},
      {
        _id: 0,
        first_name: 1,
        last_name: 1,
        email: 1,
        phone: 1,
        dob: { $dateToString: { format: '%d-%m-%Y', date: '$dob' } },
        address: 1,
        city: 1,
        state: 1,
        zip: 1,
        message: 1,
        have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine: 1,
        did_you_use_a_Philips_brand_machine: 1,
        did_you_seek_medical_treatment_for_your_injury: 1,
        agree_t_and_c: 1,
        ip_address: 1,
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
      const fileName = 'philipsLawsuit-lawsuit-' + dummyName + '.csv'
      const excelFileDir = 'public/upload/philipsLawsuit-lawsuit-excel-file'
      if (!fs.existsSync(excelFileDir)) {
        fs.mkdirSync(excelFileDir, { recursive: true })
      }
      const filePath = 'public/upload/philipsLawsuit-lawsuit-excel-file/' + fileName
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

module.exports.philipsController = {
  list,
  view,
  remove,
  exportData
}