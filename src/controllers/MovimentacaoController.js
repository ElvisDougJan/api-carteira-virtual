const DepositoModel = require('../models/DepositoModel').CriaModelDeposito()

class MovimentacaoController {

  constructor() {
    this.idDeposito = ''
  }

  async criaPrimeiroRegistroDeposito() {
    return DepositoModel.find({})
      .then(async depositosEncontrados => {
        if (depositosEncontrados.length === 0) {
          await DepositoModel.create({ qtdDeposito: 0 })
            .then(() => console.log('Registro de deposito zerado criado'))
            .catch(err => console.error(err))
        } else {
          this.idDeposito = depositosEncontrados[0]._id
        }
      })
  }

  async realizaMovimentacao(tipo, quantidade) {
    await DepositoModel.findById(this.idDeposito)
      .then(deposito => {
        if (tipo === 'entrada') {
          DepositoModel.updateOne({ _id: this.idDeposito },
            { qtdDeposito: parseFloat(deposito.qtdDeposito) + parseFloat(quantidade) })
            .then((res) => console.log('Deposito atualizado com entrada', res))
            .catch(err => console.error('ERRO AO ATUALIZAR O DEPOSITO NA ENTRADA:', err))
        } else {
          DepositoModel.updateOne({ _id: this.idDeposito },
            { qtdDeposito: parseFloat(deposito.qtdDeposito) - parseFloat(quantidade) })
            .then(() => console.log('Deposito atualizado com saída'))
            .catch(err => console.error('ERRO AO ATUALIZAR O DEPOSITO NA SAíDA:', err))
        }
      })
  }

  async consultaDeposito(req, res) {
    await DepositoModel.findOne({ _id: this.idDeposito })
      .then(deposito => res.status(200).json(deposito))
      .catch(err => console.error(err))
  }
}

module.exports = new MovimentacaoController()