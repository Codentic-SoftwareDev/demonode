const { response, path } = require('../../constant')
const { logger } = require('../../utils')
const { languageFunc } = require('../../i18n/i18n')

const newsModel = require('../../models/news')

// list news
const list = async (req, res) => {
  const i18n = languageFunc(req.language)
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
    .then(async result => {
      if (!result.length) {
        logger('admin-api', 'warning', req, i18n.__('noNewsExist'))

        return response(res, true, 202, i18n.__('noNewsExist'))
      }
      logger('admin-api', 'info', req, i18n.__('newsList'))

      return response(res, true, 200, i18n.__('newsList'), result)
    })
    .catch(error => {
      logger('admin-api', 'error', req, i18n.__('errorNews'), error)

      return response(res, false, 422, i18n.__('errorNews'))
    })
}

// view news
const view = async (req, res) => {
  const i18n = languageFunc(req.language)
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

module.exports.newsController = {
  list,
  view
}
