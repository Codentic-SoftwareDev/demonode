const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create a schema
const schema = new Schema(
  {
    title: { type: String, required: true },
    details: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

const news = mongoose.model('news', schema)
module.exports = news
