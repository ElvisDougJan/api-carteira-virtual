const EntradaController = require('./../controllers/EntradaController')
const entradaInstancia = new EntradaController()
const router = require("express").Router()

router.post('/entrada', (req, res) => entradaInstancia.cadastraNovaEntrada(req, res))
router.get('/entrada', (req, res) => entradaInstancia.consultaTodasEntradas(req, res))

module.exports = router