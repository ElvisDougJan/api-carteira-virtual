const Schema = require('mongoose').Schema

const EntradaSchema = new Schema({
  qtdEntrada: { type: Number, default: null },
  descricao: { type: String, default: null },
  categoria: { type: Schema.Types.ObjectId, ref: 'categoria' }
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
