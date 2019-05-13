const mongoose = require('mongoose')
let db
module.exports = () => {
  if (!db) {
    db = mongoose.connect('mongodb://3.215.231.192:27017/carteira_virtual', {useNewUrlParser: true})
      .then(() => console.log('Conectado com o banco de dados!'))
      .catch(err => console.error(err))
  }
  return mongoose.connection
}
