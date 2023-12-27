const { Router } = require('express')
const {createAndAddDoc, verifyDocsObligatorios, verifyVigenciaDocs, getDocsOfInsumo,updateDocsRejected} = require('../controllers/docs.controllers')
const insercionValidator = require('../middlewares/insercionValidator')

const docsRouter = Router()

docsRouter.post('/api/v1/insumo/docs',insercionValidator,createAndAddDoc)
docsRouter.put('/api/v1/insumo/docs',updateDocsRejected)
docsRouter.get('/api/v1/insumo/docs',getDocsOfInsumo)
docsRouter.get('/api/v1/insumo/docs/obligatorios',verifyDocsObligatorios)
docsRouter.get('/api/v1/insumo/docs/vigencia',verifyVigenciaDocs)


module.exports=docsRouter