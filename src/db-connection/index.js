require('dotenv').config()
const mongoose = require('mongoose')

const mongoDBConnection = () => {
  mongoose.set('strictQuery', false)
  mongoose.mongoose
    .connect(process.env.MG_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message))
}

module.exports = {
  mongoDBConnection
}
