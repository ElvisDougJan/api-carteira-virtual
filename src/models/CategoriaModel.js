const Schema = require('mongoose').Schema

const CategoriaSchema = new Schema({
  nome: { type: String, required: true }
}, {
    timestamps: {
      createdAt: 'criadoEm',
      updatedAt: 'alteradoEm'
    },
    versionKey: false
  })

function CriaModelCategoria() {
  const db = require('../config/database')()
  return db.models.categoria || db.model('categoria', CategoriaSchema)
}

module.exports = {
  CategoriaSchema,
  CriaModelCategoria
}
