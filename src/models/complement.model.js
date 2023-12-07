const { DataTypes } = require('sequelize')
const DB = require('../dbconf/db.conf')

const complementModel = DB.define('complement', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    insumo_id: {
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.ENUM,
        values: ['SOLICITUD_DE_CREDITO', 'CARTA_DE_AUTORIZACION', 'CARTA_INSTRUCCION_NOTARIAL', 'OFERTA_VINCULANTE', 'DOMICILIACION', 'CARTA_INSTRUCCION_CARGO_Y_PAGO_VENDEDOR', 'CARATULA_CREDITO_HIPOTECARIO'],
        allowNull:false
    },
    metadatos:{
        type:DataTypes.JSON,
        allowNull:false
    }
}, {
    createdAt: 'fecha_solicitud',
    updatedAt:false
})
module.exports = complementModel