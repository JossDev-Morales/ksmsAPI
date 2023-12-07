const { DataTypes } = require('sequelize')
const DB = require('../dbconf/db.conf')

const docModel = DB.define('doc', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    insumo_id: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.ENUM,
        values: ["titulo_de_propiedad", "predial_otro_propietario", "boleta_predial", "boleta_agua",
            "alineamiento_y_numero_oficial", "aviso_clg", "solicitud_clg", "certificado_libertad_de_gravamen",
            "sucesion_testamentaria", "constancia_de_uso_de_suelo", "avaluo_propio", "avaluo_bancario",
            "constitución_regimen_de_propiedad_en_condominio", "boleta_de_ingreso_al_rppyc_constancia",
            "reglamento_condominos", "derecho_de_tanto", "certificado_zonificacion", "doc_excepcion",
            "testimonio_poder_tuhabi", "estado_de_cuenta_vendedor"]
    },
    etapa: {
        type: DataTypes.INTEGER
    },
    obligatorio: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    vigencia: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.TEXT
    },
    metadatos: {
        type: DataTypes.JSON
    }
}, {
    updatedAt: false
})
module.exports = docModel