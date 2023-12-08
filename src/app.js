const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const morgan = require('morgan')
const DB = require('./dbconf/db.conf')
const initModels = require('./models/initModels')

//routers

const insumosRouter = require('./routes/insumos.routes')
const complementosRouter = require('./routes/complementos.routes')
const docsRouter= require('./routes/docs.routes')

// db connection

initModels()

DB.authenticate({ logging: false })
    .then(() => { console.log('auth db: ok') })
    .catch((reason) => { console.log('auth failed:', reason) })
DB.sync({force:true,logging: false })
    .then(() => { console.log('sync models: ok') })
    .catch((reason) => { console.log('failed sync:', reason) })

// middlewares [cors,morgan y express]

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

//use routers

app.use(insumosRouter)
app.use(complementosRouter)
app.use(docsRouter)

// api status
app.get('/', (req, res) => {
    res.send('healthy')

})

app.listen(PORT, () => {
    console.log('Listening at port: %d', PORT);
})