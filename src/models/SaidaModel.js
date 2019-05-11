const Schema = require('mongoose').Schema

const SaidaSchema = new Schema({
  qtdSaida: { type: Number, required: true },
  descricao: { type: String, default: null },
  // categoria: { type: Schema.Types.ObjectId, ref: 'categoria' }
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
