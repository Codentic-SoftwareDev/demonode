const mongoose = require('mongoose')
const message = require('../i18n/locales/en.json')

const Schema = mongoose.Schema

// create a schema
const schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message.pleaseEnterValidEmail
      ],
      required: [true, message.pleaseEnterEmail],
      lowercase: true
    },
    phone: { type: Number, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    message: { type: String, required: true },
    was_the_accident_in_the_last_1_years: { type: Boolean, required: true, default: false },
    did_you_report_the_accident_to_the_police: { type: Boolean, required: true, default: false },
    did_you_seek_medical_attention: { type: Boolean, required: true, default: false },
    do_you_have_ongoing_medical_needs: { type: Boolean, required: true, default: false },
    agree_t_and_c: { type: Boolean, required: true, default: false },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const autoVehicleAccidentLawsuit = mongoose.model('auto_vehicle_accident_lawsuit', schema)
module.exports = autoVehicleAccidentLawsuit
