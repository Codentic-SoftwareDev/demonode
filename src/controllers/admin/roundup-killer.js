const fs = require('fs')
const Json2csvParser = require('json2csv').Parser
const fsx = require('fs-extra')

const { response } = require('../../constant')
const { logger, generateNumber } = require('../../utils')

const roundupKillerModel = require('../../models/roundup-killer')

// List talcum powder lawsuit
const list = async (req, res) => {
  const i18n = req.i18n
  const page = parseInt(req.query.page)
  const itemsPerPage = parseInt(req.query.items_per_page)
  const offset = (page - 1) * itemsPerPage
  await roundupKillerModel
    .find()
    .skip(offset)
    .limit(itemsPerPage)
    .then(async result => {
      const totalRecords = await roundupKillerModel.count()
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

// View talcum powder lawsuit
const view = async (req, res) => {
  const i18n = req.i18n

  await roundupKillerModel
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

// remove/delete talcum powder lawsuit
const remove = async (req, res) => {
  const i18n = req.i18n

  await roundupKillerModel
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

  await roundupKillerModel
    .find(
      {},
      {
        _id: 0,
        first_name: 1,
        last_name: 1,
        email: 1,
        phone: 1,
        dob: 1,
        address: 1,
        city: 1,
        state: 1,
        zip: 1,
        message: 1,
        state_roundup_used: 1,
        where_were_you_exposed_to_Roundup: 1,
        were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma: 1,
        have_you_ever_been_diagnosed_with_any_other_type_of_cancer_needed_chemotherapy_before_being_diagnosis_with_NHL: 1,
        have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis: 1,
        have_you_ever_been_diagnosed_with_an_Autoimmune_disorder: 1,
        have_you_ever_been_diagnosed_with_a_viral_infection: 1,
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
      const fileName = 'roundup-killer-' + dummyName + '.csv'
      const excelFileDir = 'public/upload/roundup-killer-excel-file'
      if (!fs.existsSync(excelFileDir)) {
        fs.mkdirSync(excelFileDir, { recursive: true })
      }
      const filePath = 'public/upload/roundup-killer-excel-file/' + fileName
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

module.exports.roundupKillerController = {
  list,
  view,
  remove,
  exportData
}
