const mongoose = require('mongoose')
let db
module.exports = () => {
  if (!db) {
    if (process.env.NODE_ENV === 'development') {
      db = mongoose.connect('mongodb://3.215.231.192:27017/carteira_virtual', { useNewUrlParser: true })
        .then(() => console.log('Conectado com o banco de dados em modo DESENVOLVIMENTO!'))
        .catch(err => console.error(err))
    } else {
      db = mongoose.connect('mongodb://localhost:27017/carteira_virtual', { useNewUrlParser: true })
        .then(() => console.log('Conectado com o banco de dados em modo PRODUÇÃO!'))
        .catch(err => console.error(err))
    }
  }
  return mongoose.connection
}
