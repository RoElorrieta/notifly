process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

/*******************************
 * Mongoose initialization and 
 * connection to MongoDB
 * *****************************/

mongoose.connect(process.env.MONGO_URL,
    {
      dbName: process.env.MONGO_DB || 'Notifly',
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }, err => {
      if (err) { throw new Error(err) }
      console.info('Connection to database established\n')
    })

/*******************************
 * Routing with express and
 * middlewares
 ******************************/

const app = express()
    .use(cors())
    .use(morgan('combined'))
    .use(express.json())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/api', require('./DB/api/routes/router'))

/******************************
 * Server initialization
 ******************************/

const PORT = process.env.PORT || 2222
app.listen(PORT, (err) => {
  if (err) { throw new Error(err) }
  console.info('>'.repeat(40))
  console.info('Notifly server running')
  console.info(`Established on port: http://localhost:${PORT}`)
  console.info('>'.repeat(40) + '\n')
})