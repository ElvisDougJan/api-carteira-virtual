const EntradaModel = require('./../models/EntradaModel').CriaModelEntrada()
const MovimentacaoController = require('./MovimentacaoController')

class EntradaController {

  async cadastraNovaEntrada(req, res) {
    await MovimentacaoController.realizaMovimentacao('entrada', req.body.qtdEntrada)
      .then(async () => {
        await EntradaModel.create(req.body)
          .then(entradaCadastrada => res.status(200).json(entradaCadastrada))
          .catch(err => console.error(err))
      })
      .catch(err => console.error('ERRO AO CADASTRAR NOVA ENTRADA: ', err))
  }
}

module.exports = new EntradaController()
