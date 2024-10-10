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
    state_roundup_used: { type: String, required: true },
    where_were_you_exposed_to_Roundup: { type: String, enum: ['Home', 'Work'], default: 'Home' },
    were_you_or_a_loved_one_diagnosed_with_Non_Hodgkin_Lymphoma: { type: Boolean, required: true, default: false },
    have_you_ever_been_diagnosed_with_any_other_type_of_cancer_needed_chemotherapy_before_being_diagnosis_with_NHL: {
      type: Boolean,
      required: true,
      default: false
    },
    have_you_ever_had_an_organ_transplant_that_required_immunosup_pressant_medication_prior_to_NHL_diagnosis: {
      type: Boolean,
      required: true,
      default: false
    },
    have_you_ever_been_diagnosed_with_an_Autoimmune_disorder: {
      type: Boolean,
      required: true,
      default: false
    },
    have_you_ever_been_diagnosed_with_a_viral_infection: {
      type: Boolean,
      required: true,
      default: false
    },
    agree_t_and_c: { type: Boolean, required: true, default: false },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const roundupKiller = mongoose.model('roundup_killer', schema)
module.exports = roundupKiller
