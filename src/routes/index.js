const router = require("express").Router()

router.get('/', (req, res) => res.json('API carteira financeira'))

module.exports = router
