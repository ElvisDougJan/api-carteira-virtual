const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const MovimentacaoController = require('./controllers/MovimentacaoController')

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const rotaIndex = require('./routes/index')
const rotaEntrada = require('./routes/entradaRoute')
const rotaSaida = require('./routes/saidaRoute')
const rotaCategoria = require('./routes/categoriaRoute')
const rotaDeposito = require('./routes/depositoRoute')

app.use(rotaIndex)
app.use(rotaEntrada)
app.use(rotaSaida)
app.use(rotaCategoria)
app.use(rotaDeposito)

MovimentacaoController.criaPrimeiroRegistroDeposito()

module.exports = app