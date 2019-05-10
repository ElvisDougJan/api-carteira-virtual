const Schema = require('mongoose').Schema

const SaidaSchema = new Schema({
  qtdSaida: { type: Number, required: true },
  qtdDeposito: { type: Schema.Types.ObjectId, ref: 'deposito' }
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelSaida() {
  const db = require('../config/database')()
  return db.models.saida || db.model('saida', SaidaSchema)
}

module.exports = {
  SaidaSchema,
  CriaModelSaida
}
