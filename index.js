const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { PORT } = require('./config')

const app = express()
require('./db/dbConnect')()

const evotal = require('./routes/evotal')
const user = require('./routes/user')
const medication = require('./routes/medication')
const batterCapacity = require('./routes/batteryCapacity')

process.on('unhandledRejection', (err) => {
  console.log(err, 'Unhandled Rejection at Promise')
  process.exit(1)
})
process.on('uncaughtException', (err) => {
  console.log(err, 'Uncaught Exception thrown')
  process.exit(1)
})

app.use(cors({ origin: '*' }))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use('/evotal', evotal)
app.use('/medication', medication)
app.use('/battery', batterCapacity)
app.use('/user', user)

app.listen(PORT, () => {
  console.log(`Web server is running ${PORT}`)
})
