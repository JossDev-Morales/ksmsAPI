const { Router } = require('express')
const { addComplement, getComplement } = require('../controllers/complements.controllers')

const complementosRouter = Router()

complementosRouter.post('/api/v1/insumo/complemento',addComplement)
complementosRouter.get('/api/v1/insumo/complemento',getComplement)

module.exports=complementosRouter