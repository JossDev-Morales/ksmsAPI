const complementsServices = require("../services/complements.service")
const customError = require("../utils/customError")

const addComplement = async (req, res) => {
    try {
        
        const { id, complemento: { nombre, metadatos: { folio_kosmos, numero_de_cliente, nombre_completo, fecha_de_registro_del_documento, tramite_en_el_que_se_uso, tipo_del_producto_contratado, numero_de_credito } } } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        if (!nombre) {
            throw new customError({ name: 'invalidData', message: 'nombre can not be undefined', nombre })
        }
        //verificar que no se repitan
        console.log('alive')
        const insumoComplements = await complementsServices.getComplementNames(id)
        console.log('alive')
        if (insumoComplements.some((name)=>name===nombre)) {
            throw new customError({name:'invalidComplementRequest',message:'this complemento already been requested'})
        }
        console.log('alive')
        const complement = await complementsServices.addComplementToInsumo(id, { nombre, metadatos: { folio_kosmos, numero_de_cliente, nombre_completo, fecha_de_registro_del_documento, tramite_en_el_que_se_uso, tipo_del_producto_contratado, numero_de_credito } })
        res.status(201).json(complement)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
const getComplement = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        const complement = await complementsServices.getComplementById(id)
        res.status(200).json(complement)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    addComplement,
    getComplement
}