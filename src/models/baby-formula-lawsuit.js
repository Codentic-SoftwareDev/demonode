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
    chid_dob: { type: String, required: true },
    was_the_child_was_born_premature: { type: String, enum: ['Yes', 'No', 'Unsure'] },
    was_the_child_given_formula_or_milk_fortifier: { type: String, enum: ['Yes', 'No', 'Unsure'] },
    was_the_child_diagnosed_with_nec: { type: String, enum: ['Yes', 'No', 'Unsure'] },
    did_the_child_experience_any_of_the_following: { type: Array, required: true },
    agree_t_and_c: { type: Boolean, required: true, default: false },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const babyFormulaLawsuit = mongoose.model('baby_formula_lawsuit', schema)
module.exports = babyFormulaLawsuit
