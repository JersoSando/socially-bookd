const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const ctrl = require('./controller')

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
app.post('/api/signup', ctrl.signUp)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))