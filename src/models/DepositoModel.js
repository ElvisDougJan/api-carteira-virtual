const Schema = require('mongoose').Schema

const DepositoSchema = new Schema({
  qtdDeposito: { type: Number, required: true },
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelDeposito() {
  const db = require('../config/database')()
  return db.models.deposito || db.model('deposito', DepositoSchema)
}

module.exports = {
  DepositoSchema,
  CriaModelDeposito
}
