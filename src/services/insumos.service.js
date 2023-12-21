const { where } = require('sequelize')
const insumosModel = require('../models/insumos.model')
const customError = require('../utils/customError')

class insumosServices {
    static async createInsumo(insumo) {
        try {
            const { etapa, subetapa, activo, tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus } = insumo
            const response = await insumosModel.create({ etapa, subetapa, activo, tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus })
            return response
        } catch (error) {
            throw error
        }
    }
    static async upEtapa(id, etapa) {
        try {
            await insumosModel.update({ etapa: etapa }, { where: { id } })
        } catch (error) {
            throw error
        }
    }
    static async upSubetapa(id, subetapa) {
        try {
            await insumosModel.update({ subetapa: subetapa }, { where: { id } })
        } catch (error) {
            throw error
        }
    }
    static async rejectInsumo(id, motivo_de_rechazo) {
        try {
            console.log('alive1');
            const response = await insumosModel.update({ motivo_de_rechazo }, { where: { id } })
            console.log('alive12');
            return response
        } catch (error) {
            throw error
        }
    }
    static async deleteInsumoById(id) {
        try {
            await insumosModel.destroy({ where: { id } })
        } catch (error) {
            throw error
        }
    }
    static async getInsumoById(id) {
        try {
            const insumo = await insumosModel.findByPk(id)
            return insumo
        } catch (error) {
            throw error
        }
    }
    static async updateInsumo(insumo, id) {
        try {
            const { fecha_consulta_listas_negras,tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus } = insumo
            const response = await insumosModel.update({ fecha_consulta_listas_negras,tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus }, { where: { id } })
            if (response === null) {
                throw new customError({ name: 'wrongId', message: 'this insumo do not exist' })
            }
        } catch (error) {
            throw error
        }
    }
    static async changeEstatus(id, estatus) {
        try {
            await insumosModel.update({ estatus }, { where: { id } })
        } catch (error) {
            error.where = 'service.insumos.changeEstatus'
            throw error
        }
    }
    static async changeIsActive(id, activo) {
        try {
            await insumosModel.update({ activo }, { where: { id } })
        } catch (error) {
            throw error
        }
    }
    static async getEtapaById(id) {
        try {
            const response = await insumosModel.findByPk(id)
            if (response === null) {
                throw new customError({ name: 'wrongId', message: 'this insumo do not exist' })
            }
            return response.etapa
        } catch (error) {
            throw error
        }
    }
}
module.exports = insumosServices