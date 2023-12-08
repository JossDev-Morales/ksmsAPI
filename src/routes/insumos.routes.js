const { Router } = require('express')
const {createInsumo, updateInsumo, getInsumo, deleteInsumo, updateEtapa, reasonOfRejection, estatusChanger, changeActive} = require('../controllers/insumos.controllers')

const insumosRouter = Router()

insumosRouter.post('/api/v1/insumo',createInsumo)
insumosRouter.put('/api/v1/insumo',updateInsumo)
insumosRouter.get('/api/v1/insumo',getInsumo)
insumosRouter.delete('/api/v1/insumo',deleteInsumo)
insumosRouter.put('/api/v1/insumo/etapa',updateEtapa)
insumosRouter.put('/api/v1/insumo/reject',reasonOfRejection)
insumosRouter.put('/api/v1/insumo/estatus',estatusChanger)
insumosRouter.put('/api/v1/insumo/activo',changeActive)


module.exports=insumosRouter