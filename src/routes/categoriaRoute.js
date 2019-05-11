const CategoriaController = require('./../controllers/CategoriaController')
const categoriaInstancia = new CategoriaController()
const router = require("express").Router()

router.post('/categoria', (req, res) => categoriaInstancia.cadastraNovaCategoria(req, res))
router.get('/categoria', (req, res) => categoriaInstancia.consultaTodasCategorias(req, res))

module.exports = router