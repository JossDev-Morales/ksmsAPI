const complementModel = require("../models/complement.model")

class complementsServices {
    static async addComplementToInsumo(id, complement) {
        try {
            const { nombre, metadatos } = complement
            /*if (Object.keys(metadata).every()) {

            }*/
            const response = await complementModel.create({ insumo_id: id, nombre, metadatos })
            return response
        } catch (error) {
            throw error
        }
    }
    static async getComplementById(id) {
        try {
            const response = await complementModel.findAndCountAll({ where: { insumo_id: id } })
            return response
        } catch (error) {
            throw error
        }
    }
    static async getComplementNames(id) {
        try {
            const count = await complementModel.findAll({where:{insumo_id:id}})
            return count.map((com)=>com.dataValues.nombre)
        } catch (error) {
            throw error
        }
    }
}
module.exports = complementsServices