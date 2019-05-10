const SaidaController = require('./../controllers/SaidaController')
const router = require("express").Router()

router.post('/nova-saida', (req, res) => SaidaController.cadastraNovaSaida(req, res))

module.exports = router
