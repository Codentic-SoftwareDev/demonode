const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema
const schema = new Schema(
  {
    key: { type: String, required: true },
    value: { type: String }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

const setting = mongoose.model('setting', schema)
module.exports = setting
