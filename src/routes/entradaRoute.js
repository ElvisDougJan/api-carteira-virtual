const EntradaController = require('./../controllers/EntradaController')
const router = require("express").Router()

router.post('/nova-entrada', (req, res) => EntradaController.cadastraNovaEntrada(req, res))

module.exports = router