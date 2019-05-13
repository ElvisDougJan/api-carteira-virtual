const SaidaModel = require('./../models/SaidaModel').CriaModelSaida()
const MovimentacaoController = require('./MovimentacaoController')

class SaidaController {

  async cadastraNovaSaida(req, res) {
    await MovimentacaoController.realizaMovimentacao('saida', req.body.qtdSaida)
      .then(async () => {
        await SaidaModel.create(req.body)
          .then(saidaCadastrada => res.status(200).json(saidaCadastrada))
          .catch(err => console.error(err))
      })
      .catch(err => console.error('ERRO AO CADASTRAR NOVA SAÍDA: ', err))
  }
}

module.exports = SaidaController
