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
    are_you_concerned_about_an_injury_from_a_paragard_IUD_device_implant: {
      type: Boolean,
      required: true,
      default: false
    },
    is_the_injured_individual_you_or_a_loved_one: { type: Boolean, required: true, default: false },
    what_date_was_the_paragard_IUD_implanted: { type: Date, required: true, default: false },
    was_there_any_other_complications_when_the_IUD_broke: {
      type: String,
      enum: [
        'The IUD was embedded',
        'The IUD migrated',
        'The doctor was unable to locate the IUD',
        'Other Complication',
        'No Complications'
      ]
    },
    was_surgery_required_to_remove_the_paragard_IUD: {
      type: String,
      enum: ['Yes', 'No', 'Surgery is schedules or will be needed']
    },
    have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before:
      { type: Boolean, required: true, default: false },
    agree_t_and_c: { type: Boolean, required: true, default: false },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const paragardLawsuit = mongoose.model('paragard_lawsuit', schema)
module.exports = paragardLawsuit
