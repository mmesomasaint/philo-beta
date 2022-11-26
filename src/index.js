require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const store = require('./store-data')
const errorManager = require('./error-manager')

// Initialize server
const app = express()
const router = express.Router()
app.use(express.static(__dirname + '/public'));

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
console.log('MongoDB connected')

// Setup server and router
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['POST'],
    credentials: true,
  })
)

// Router
router.post('', store)

// Manage error messages
app.use(errorManager)

// Listen at port 5000
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening at port ${PORT}`))
