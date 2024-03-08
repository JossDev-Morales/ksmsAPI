const {Sequelize} = require('sequelize')

const db=new Sequelize({
    dialect:'postgres',
    host:'dpg-cnl5b50l5elc73dp493g-a',
    port:5432,
    username:'kosmos_user',
    password:'TgGjd4v9M476tidxnVXacbM1AHHr9HSb',
    database:'kosmos',
    logging:false
})
module.exports=db