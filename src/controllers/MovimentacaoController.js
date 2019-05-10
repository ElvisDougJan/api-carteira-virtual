const DepositoModel = require('../models/DepositoModel').CriaModelDeposito()

class MovimentaDepositoController {

  constructor() {
    this.idDeposito = ''
  }

  async criaPrimeiroRegistroDeposito() {
    await DepositoModel.find({})
      .then(async depositosEncontrados => {
        if (depositosEncontrados.length === 0) {
          await DepositoModel.create({ qtdDeposito: 0 })
            .then(() => console.log('Registro de deposito zerado criado'))
            .catch(err => console.error(err))
        } else {
          this.idDeposito = depositosEncontrados[0].id
        }
      })
  }

  async realizaMovimentacao(tipo, quantidade) {
    await DepositoModel.findById(this.idDeposito)
      .then(deposito => {
        if (tipo === 'entrada') {
          DepositoModel.updateOne({ _id: this.idDeposito },
            { qtdDeposito: deposito.qtdDeposito + quantidade })
            .then(() => console.log('Deposito atualizado com entrada'))
            .catch(err => console.error('ERRO AO ATUALIZAR O DEPOSITO NA ENTRADA:', err))
        } else {
          DepositoModel.updateOne({ _id: this.idDeposito },
            { qtdDeposito: deposito.qtdDeposito - quantidade })
            .then(() => console.log('Deposito atualizado com saída'))
            .catch(err => console.error('ERRO AO ATUALIZAR O DEPOSITO NA SAíDA:', err))
        }
      })
  }
}

module.exports = new MovimentaDepositoController()