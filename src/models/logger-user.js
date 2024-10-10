const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema
const schema = new Schema(
  {
    user_name: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

const loggerUser = mongoose.model('logger_user', schema)
module.exports = loggerUser
