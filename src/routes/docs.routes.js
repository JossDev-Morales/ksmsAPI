const { Router } = require('express')
const {createAndAddDoc, verifyDocsObligatorios, verifyVigenciaDocs} = require('../controllers/docs.controllers')

const docsRouter = Router()

docsRouter.post('/api/v1/insumo/docs',createAndAddDoc)
docsRouter.get('/api/v1/insumo/docs/obligatorios',verifyDocsObligatorios)
docsRouter.get('/api/v1/insumo/docs/vigencia',verifyVigenciaDocs)

module.exports=docsRouter