const db = require("../dbconf/db.conf");
const { DataType, DataTypes } = require('sequelize')
const responses=db.define("responses",{
    idResponse:{
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4(),
        primaryKey:true
    },
    response:{
        type:DataTypes.JSON,
        allowNull:false
    }
},{
    updatedAt:false
})
module.exports=responses