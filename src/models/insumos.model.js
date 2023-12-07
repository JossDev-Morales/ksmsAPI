const { DataTypes } = require('sequelize')
const DB = require('../dbconf/db.conf')

const insumosModel = DB.define('insumos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    etapa: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    subetapa: {
        type: DataTypes.DOUBLE,
        defaultValue: 0
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    fecha_consulta_listas_negras: {
        type: DataTypes.DATE
    },
    motivo_de_rechazo: {
        type: DataTypes.STRING
    },
    tipo_de_regimen: {
        type: DataTypes.ENUM,
        values: ["Condominio-vertical", "Condominio-horizontal", "Condominio-mixto", "Casa habitación independiente"]
    },
    tipo_de_poder: {
        type: DataTypes.STRING
    },
    valor_de_la_vivienda: {
        type: DataTypes.DOUBLE
    },
    valor_reposicion: {
        type: DataTypes.DOUBLE
    },
    valor_terreno: {
        type: DataTypes.DOUBLE
    },
    descripcion_de_la_vivienda: {
        type: DataTypes.ENUM,
        values: ["Casa habitacion nueva", "Casa habitacion usada", "Departamento nuevo", "Departamento usado"]
    },
    area_construida: {
        type: DataTypes.INTEGER
    },
    antiguedad_de_la_vivienda: {
        type: DataTypes.INTEGER
    },
    calle: {
        type: DataTypes.STRING
    },
    numero_exterior: {
        type: DataTypes.STRING
    },
    numero_interior: {
        type: DataTypes.STRING
    },
    identificar_de_excepcion_numero_interior: {
        type: DataTypes.STRING,
        allowNull:true
    },
    ciudad: {
        type: DataTypes.STRING
    },
    municipio_o_alcaldia: {
        type: DataTypes.STRING
    },
    colonia: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    codigo_postal: {
        type: DataTypes.INTEGER
    },
    folio_ruv: {
        type: DataTypes.STRING
    },
    vendedor_nombre: {
        type: DataTypes.STRING
    },
    vendedor_apellido_paterno: {
        type: DataTypes.STRING
    },
    vendedor_apellido_materno: {
        type: DataTypes.STRING
    },
    vendedor_tipo_de_persona: {
        type: DataTypes.ENUM,
        values: ['PF', 'PFAE', 'PM']
    },
    vendedor_razon_social: {
        type: DataTypes.STRING
    },
    vendedor_rfc: {
        type: DataTypes.STRING
    },
    vendedor_curp: {
        type: DataTypes.STRING
    },
    vendedor_correo_electronico: {
        type: DataTypes.STRING,
        validate: { isEmail: true }
    },
    vendedor_cuenta_clabe: {
        type: DataTypes.DOUBLE
    },
    vendedor_calle: {
        type: DataTypes.STRING
    },
    vendedor_numero_exterior: {
        type: DataTypes.STRING
    },
    vendedor_numero_interior: {
        type: DataTypes.STRING
    },
    vendedor_colonia: {
        type: DataTypes.STRING
    },
    vendedor_ciudad: {
        type: DataTypes.STRING
    },
    vendedor_municipio: {
        type: DataTypes.STRING
    },
    vendedor_estado: {
        type: DataTypes.STRING
    },
    vendedor_codigo_postal: {
        type: DataTypes.INTEGER
    },
    estatus: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: 'fechaCreacionInsumo',
    updatedAt:false
})
module.exports = insumosModel