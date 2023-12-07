const {Sequelize} = require('sequelize')

const db=new Sequelize({
    dialect:'postgres',
    host:'dpg-clokhq946foc73c7ilf0-a',
    port:5432,
    username:'ksmsdb_user',
    password:'R1XQbCkJAEJpUITAAbkFoXb9HkCrxTu7',
    database:'ksmsdb',
    logging:false
})
module.exports=db