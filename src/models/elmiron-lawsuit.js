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
    agree_t_and_c: { type: Boolean, required: true, default: false },
    is_the_injured_individual_you_or_a_loved_one: { type: String, enum: ['Myself', 'Loved One'] },
    concerned_about_an_injury_or_a_diagnosis_that_you_believe_resulted_from_taking_Elmiron: {
      type: Boolean,
      required: true
    },
    have_any_of_these_diagnoses_occurred_from_taking_Elmiron: {
      type: String,
      enum: [
        'Age-related macular degeneration(AMD)',
        'Pigmentation macular degeneration',
        'Dry macular degeneration',
        'Wet macular degeneration',
        'Pattern dystrophy',
        'Pigmentation maculopathy',
        'Pigmentation maculitis',
        'Retinal maculopathy',
        'Other retinal disease or eye damage',
        'Other Diagnosis',
        'No Diagnosis'
      ],
      default: 'No Diagnosis'
    },
    have_any_of_these_symptoms_occurred_from_taking_Elmiron: {
      type: String,
      enum: [
        'Poor light to dark adaptation',
        'Floaters or sport in field of vision',
        'Significant eye pain',
        'Straight lines appear curved or wavy',
        'Other eye injury',
        'Pigmentation maculopathy',
        'Pigmentation maculitis',
        'Retinal maculopathy',
        'Other retinal disease or eye damage',
        'Other Diagnosis',
        'No symptoms'
      ],
      default: 'No symptoms'
    },
    the_year_that_the_eye_symptom_or_diagnosis_was_first_discovered: { type: String, required: true },
    the_year_when_the_Elmiron_medication_was_started: { type: String, required: true },
    the_year_when_the_Elmiron_medication_was_stopped: { type: String, required: true },
    is_the_medication_currently_being_taken: { type: Boolean, required: true },
    have_you_or_your_loved_one_ever_signed_any_documents_retainers_or_agreements_with_an_attorney_or_a_law_firm_about_this_before:
      { type: Boolean, required: true },
    ip_address: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)
const elmironLawsuit = mongoose.model('elmiron_lawsuit', schema)
module.exports = elmironLawsuit
