const {Sequelize} = require('sequelize')

const db=new Sequelize({
    dialect:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'keyjo2803',
    database:'tuhabi',
    logging:false
})
module.exports=db