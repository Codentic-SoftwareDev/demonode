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
    are_you_liscensed_to_use_Paraquat: { type: Boolean, required: true, default: false },
    were_you_given_medication: { type: Boolean, required: true, default: false },
    are_you_working_around_commercial_weed_killers_and_pesticides: { type: Boolean, required: true, default: false },
    diagnosed_with_Parkinson_disease_with_movement_disorder: { type: Boolean, required: true, default: false },
    agree_t_and_c: { type: Boolean, required: true, default: false },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const paraquatLawsuit = mongoose.model('paraquat_lawsuit', schema)
module.exports = paraquatLawsuit
