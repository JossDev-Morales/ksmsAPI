
const docModel = require('../models/doc.model')

class docsServices {
    static async addDoc(id, document) {
        try {
            const { nombre, etapa, obligatorio, vigencia, documento, metadatos } = document
            const doc = await docModel.create({ insumo_id: id, nombre, etapa, obligatorio, vigencia, documento, metadatos })
            return doc
        } catch (error) {
            throw error
        }
    }
    static async getDocsObByEtapaByIdName(id, etapa) {
        try {
            const doclist = await docModel.findAll({ where: { insumo_id: id, obligatorio: true, etapa: etapa } })
            return doclist.map(res => res.dataValues.nombre)
        } catch (error) {
            throw error
        }
    }
    static async getDocsObByEtapaById(id, etapa) {
        try {
            const doclist = await docModel.findAll({ where: { insumo_id: id, obligatorio: true, etapa: etapa } })
            return doclist.map(res => res.dataValues)
        } catch (error) {
            throw error
        }
    }
    /**
     * 
     * @param {(1|2|3|"1"|"2"|"3")} etapa 
     * @returns {[]}
     */
    static getDocsObByEtapa(etapa) {
        try {
            const etapa1 = ["titulo_de_propiedad", "testimonio_poder_tuhabi"]
            const etapa2 = ["boleta_predial", "boleta_agua", "constancia_de_uso_de_suelo", "avaluo_bancario", "certificado_zonificacion", "estado_de_cuenta_vendedor"]
            const etapa3 = ["certificado_libertad_de_gravamen"]
            if (etapa == 1) {
                return etapa1
            } else if (etapa == 2) {
                return etapa2
            } else if (etapa == 3) {
                return etapa3
            }
        } catch (error) {
            throw error
        }
    }
    static verifyVigenciaService(vigencia) {
        try {
            const [mes, dia, año] = vigencia.split('/')
            const nowVigencia = new Date(año, mes - 1, dia)
            const now = new Date()
            const mlsPerDay = 24 * 60 * 60 * 1000
            const diff = Math.floor((nowVigencia-now) / mlsPerDay)
            if (diff < 7) {
                return false
            } else {
                return true
            }
        } catch (error) {
            throw error
        }
    }
    static async getAllDocs(id) {
        try {
            const docs = await docModel.findAll({where:{insumo_id:id}})
            return docs
        } catch (error) {
            throw error
        }
    }
    static async countDocs(id){
        try {
            const count = await docModel.count({where:{insumo_id:id}})
            return count
        } catch (error) {
            throw error
        }
    }
}
module.exports = docsServices