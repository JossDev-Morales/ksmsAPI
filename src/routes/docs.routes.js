const { Router } = require('express')
const {createAndAddDoc, verifyDocsObligatorios, verifyVigenciaDocs, getDocsOfInsumo} = require('../controllers/docs.controllers')

const docsRouter = Router()

docsRouter.post('/api/v1/insumo/docs',createAndAddDoc)
insumosRouter.get('/api/v1/insumo/docs',getDocsOfInsumo)
docsRouter.get('/api/v1/insumo/docs/obligatorios',verifyDocsObligatorios)
docsRouter.get('/api/v1/insumo/docs/vigencia',verifyVigenciaDocs)


module.exports=docsRouter