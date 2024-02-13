const { where } = require('sequelize')
const insumosModel = require('../models/insumos.model')
const customError = require('../utils/customError')

class insumosServices {
    static async createInsumo(insumo) {
        try {
            const { latitud, longitud, porcentaje_de_monto, cantidad_de_monto, numero_de_pisos_del_inmueble, valor_de_venta, nombre_del_responsable_tuHabi_del_inmueble, responsable_tuhabi_del_inmueble, fecha_consulta_listas_negras, etapa, subetapa, activo, tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus } = insumo
            let fecha_consulta_listas_negrasFormated
            if (fecha_consulta_listas_negras) {
                let [mes, dia, año] = fecha_consulta_listas_negras.split('/')
                fecha_consulta_listas_negrasFormated = fecha_consulta_listas_negras ? new Date(`${dia}/${mes}/${año}`) : null
            }
            const response = await insumosModel.create({ latitud, longitud, porcentaje_de_monto, cantidad_de_monto, numero_de_pisos_del_inmueble, valor_de_venta, nombre_del_responsable_tuHabi_del_inmueble, responsable_tuhabi_del_inmueble, fecha_consulta_listas_negras: fecha_consulta_listas_negrasFormated, etapa, subetapa, activo, tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus })
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
            const response = await insumosModel.update({ motivo_de_rechazo }, { where: { id } })
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
            const { latitud, longitud, porcentaje_de_monto, cantidad_de_monto, numero_de_pisos_del_inmueble, valor_de_venta, nombre_del_responsable_tuHabi_del_inmueble, responsable_tuhabi_del_inmueble, fecha_consulta_listas_negras, tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus } = insumo
            let fecha_consulta_listas_negrasFormated
            if (fecha_consulta_listas_negras) {
                let [mes, dia, año] = fecha_consulta_listas_negras.split('/')
                fecha_consulta_listas_negrasFormated = fecha_consulta_listas_negras ? new Date(`${dia}/${mes}/${año}`) : null
            }
            const response = await insumosModel.update({ latitud, longitud, porcentaje_de_monto, cantidad_de_monto, numero_de_pisos_del_inmueble, nombre_del_responsable_tuHabi_del_inmueble, valor_de_venta, responsable_tuhabi_del_inmueble, fecha_consulta_listas_negras: fecha_consulta_listas_negrasFormated, tipo_de_regimen, tipo_de_poder, valor_de_la_vivienda, valor_reposicion, valor_terreno, descripcion_de_la_vivienda, area_construida, antiguedad_de_la_vivienda, calle, numero_exterior, numero_interior, identificar_de_excepcion_numero_interior, ciudad, municipio_o_alcaldia, colonia, estado, codigo_postal, folio_ruv, vendedor_nombre, vendedor_apellido_paterno, vendedor_apellido_materno, vendedor_tipo_de_persona, vendedor_razon_social, vendedor_rfc, vendedor_curp, vendedor_correo_electronico, vendedor_cuenta_clabe, vendedor_calle, vendedor_numero_exterior, vendedor_numero_interior, vendedor_colonia, vendedor_ciudad, vendedor_municipio, vendedor_estado, vendedor_codigo_postal, estatus }, { where: { id } })
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
            throw error
        }
    }
    static async getEstatusById(id) {
        try {
            const response = await insumosModel.findByPk(id)
            return response.estatus
        } catch (error) {
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
    static async getSubetapaById(id) {
        try {
            const response = await insumosModel.findByPk(id)
            if (response === null) {
                throw new customError({ name: 'wrongId', message: 'this insumo do not exist' })
            }
            return response.subetapa
        } catch (error) {
            throw error
        }
    }
}
module.exports = insumosServices