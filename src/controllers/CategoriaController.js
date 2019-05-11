const CategoriaModel = require('./../models/CategoriaModel').CriaModelCategoria()

class CategoriaController {

  async consultaTodasCategorias(req, res) {
    await CategoriaModel.find({})
      .then(categorias => res.status(200).json(categorias))
      .catch(err => res.status(400).json(err))
  }

  async cadastraNovaCategoria(req, res) {
    await CategoriaModel.create(req.body)
      .then(categoriaCadastrada => res.status(200).json(categoriaCadastrada))
      .catch(err => console.error(err))
  }
}

module.exports = CategoriaController
