const complementModel = require("./complement.model")
const docModel = require("./doc.model")
//const docstableModel = require("./docstable.model")
const insumosModel = require("./insumos.model")

function initModels() {
    insumosModel.hasMany(docModel,{foreignKey:'insumo_id'})
    docModel.belongsTo(insumosModel,{foreignKey:'insumo_id'})  
    
    insumosModel.hasMany(complementModel,{foreignKey:'insumo_id'})
    complementModel.belongsTo(insumosModel,{foreignKey:'insumo_id'})

}
module.exports=initModels