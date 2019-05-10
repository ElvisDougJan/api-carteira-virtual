const Schema = require('mongoose').Schema

const EntradaSchema = new Schema({
  qtdEntrada: { type: Number, default: null },
  qtdDeposito: { type: Schema.Types.ObjectId, ref: 'deposito' }
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelEntrada() {
  const db = require('../config/database')()
  return db.models.entrada || db.model('entrada', EntradaSchema)
}

module.exports = {
  EntradaSchema,
  CriaModelEntrada
}
