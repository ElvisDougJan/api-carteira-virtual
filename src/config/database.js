const mongoose = require('mongoose')
let db
module.exports = () => {
  if (!db) {
    db = mongoose.connect('mongodb://amdin:4dm1n@3.215.231.192:27017/carteira_virtual', { useNewUrlParser: true })
  }
  return mongoose.connection
}
