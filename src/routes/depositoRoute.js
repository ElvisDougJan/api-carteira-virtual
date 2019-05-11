const MovimentacaoController = require('./../controllers/MovimentacaoController')
const router = require("express").Router()

router.get('/deposito', (req, res) => MovimentacaoController.consultaDeposito(req, res))

module.exports = router