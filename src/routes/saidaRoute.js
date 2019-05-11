const SaidaController = require('./../controllers/SaidaController')
const saidaInstancia = new SaidaController()
const router = require("express").Router()

router.post('/saida', (req, res) => saidaInstancia.cadastraNovaSaida(req, res))

module.exports = router
