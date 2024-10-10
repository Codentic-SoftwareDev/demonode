const mongoose = require('mongoose')
const message = require('../i18n/locales/en.json')

const Schema = mongoose.Schema

// create a schema
const schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message.pleaseEnterValidEmail
      ],
      required: [true, message.pleaseEnterEmail],
      lowercase: true
    },
    password: { type: String, required: true },
    role: { type: String, required: true },
    role_id: { type: Number, required: true },
    status: { type: Boolean, required: true, default: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

const admin = mongoose.model('admin', schema)
module.exports = admin
