const mongoose = require('mongoose')
let db
module.exports = () => {
  if (!db) {
    db = mongoose.connect('mongodb://admin:4dm1n@127.0.0.1:27017/admin', {useNewUrlParser: true})
      .then(() => console.log('Conectado com o banco de dados!'))
      .catch(err => console.error(err))
  }
  return mongoose.connection
}
