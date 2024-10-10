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
    have_you_suffered_any_of_the_following_injuries_as_a_result_of_using_a_CPAP_BiPAP_or_ventilator_machine: {
      type: Array,
      required: true
    },
    did_you_use_a_Philips_brand_machine: {
      type: String,
      enum: ['Yes', 'No', 'Unsure']
    },
    did_you_seek_medical_treatment_for_your_injury: {
      type: String,
      enum: ['Yes', 'No', 'Unsure']
    },
    agree_t_and_c: { type: Boolean, required: true, default: false },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const philipsLawsuit = mongoose.model('philips_lawsuit', schema)
module.exports = philipsLawsuit
