const moment = require('moment')

const { response } = require('../../constant')
const { logger } = require('../../utils')

const autoVehicleAccidentLawsuitModel = require('../../models/auto-vehicle-accident-lawsuit')
const babyFormulaLawsuitModel = require('../../models/baby-formula-lawsuit')
const campLejeuneWaterContaminationModel = require('../../models/camp-lejeune-water-contamination')
const contactUsModel = require('../../models/contact-us')
const elmironLawsuitModel = require('../../models/elmiron-lawsuit')
const herniaMeshLawsuitModel = require('../../models/hernia-mesh-lawsuit')
const paraquatLawsuitModel = require('../../models/paraquat-lawsuit')
const roundupKillerModel = require('../../models/roundup-killer')
const talcumPowderLawsuitModel = require('../../models/talcum-powder-lawsuit')
const zanTacModel = require('../../models/zantac-lawsuit')

const dashBoard = async (req, res) => {
  const i18n = req.i18n
  // today count
  const todayDate = moment().format('YYYY-MM-DD')
  const autoVehicleAccidentLawsuitTodayCount = await autoVehicleAccidentLawsuitModel
    .find({ created_at: { $gte: todayDate } })
    .count()
  const babyFormulaLawsuitTodayCount = await babyFormulaLawsuitModel.find({ created_at: { $gte: todayDate } }).count()
  const campLejeuneWaterContaminationTodayCount = await campLejeuneWaterContaminationModel
    .find({ created_at: { $gte: todayDate } })
    .count()
  const contactUsTodayCount = await contactUsModel.find({ created_at: { $gte: todayDate } }).count()
  const elmironLawsuitTodayCount = await elmironLawsuitModel.find({ created_at: { $gte: todayDate } }).count()
  const herniaMeshLawsuitTodayCount = await herniaMeshLawsuitModel.find({ created_at: { $gte: todayDate } }).count()
  const paraquatLawsuitTodayCount = await paraquatLawsuitModel.find({ created_at: { $gte: todayDate } }).count()
  const roundupKillerTodayCount = await roundupKillerModel.find({ created_at: { $gte: todayDate } }).count()
  const talcumPowderLawsuitTodayCount = await talcumPowderLawsuitModel.find({ created_at: { $gte: todayDate } }).count()
  const zanTacTodayCount = await zanTacModel.find({ created_at: { $gte: todayDate } }).count()

  const todayCount = {
    autoVehicleAccidentLawsuitCount: autoVehicleAccidentLawsuitTodayCount,
    babyFormulaLawsuitCount: babyFormulaLawsuitTodayCount,
    campLejeuneWaterContaminationCount: campLejeuneWaterContaminationTodayCount,
    contactUsCount: contactUsTodayCount,
    elmironLawsuitCount: elmironLawsuitTodayCount,
    herniaMeshLawsuitCount: herniaMeshLawsuitTodayCount,
    paraquatLawsuitCount: paraquatLawsuitTodayCount,
    roundupKillerCount: roundupKillerTodayCount,
    talcumPowderLawsuitCount: talcumPowderLawsuitTodayCount,
    zanTacCount: zanTacTodayCount
  }

  // all count
  const autoVehicleAccidentLawsuitData = await autoVehicleAccidentLawsuitModel.find().count()
  const babyFormulaLawsuitData = await babyFormulaLawsuitModel.find().count()
  const campLejeuneWaterContaminationData = await campLejeuneWaterContaminationModel.find().count()
  const contactUsData = await contactUsModel.find().count()
  const elmironLawsuitData = await elmironLawsuitModel.find().count()
  const herniaMeshLawsuitData = await herniaMeshLawsuitModel.find().count()
  const paraquatLawsuitData = await paraquatLawsuitModel.find().count()
  const roundupKillerData = await roundupKillerModel.find().count()
  const talcumPowderLawsuitData = await talcumPowderLawsuitModel.find().count()
  const zanTacData = await zanTacModel.find().count()

  const allCount = {
    autoVehicleAccidentLawsuitCount: autoVehicleAccidentLawsuitData,
    babyFormulaLawsuitCount: babyFormulaLawsuitData,
    campLejeuneWaterContaminationCount: campLejeuneWaterContaminationData,
    contactUsCount: contactUsData,
    elmironLawsuitCount: elmironLawsuitData,
    herniaMeshLawsuitCount: herniaMeshLawsuitData,
    paraquatLawsuitCount: paraquatLawsuitData,
    roundupKillerCount: roundupKillerData,
    talcumPowderLawsuitCount: talcumPowderLawsuitData,
    zanTacCount: zanTacData
  }
  logger('admin-api', 'info', req, i18n.__('getCount'))

  return response(res, true, 200, i18n.__('getCount'), { todayCount, allCount })
}
module.exports.dashboardController = {
  dashBoard
}
