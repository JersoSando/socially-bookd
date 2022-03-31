const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const ctrl = require('./controller')
const { getPost } = require('./controller')

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
app.post('/api/signup', ctrl.signUp)
app.post('/api/user', ctrl.logIn)
app.post('/api/posts', ctrl.createPost)
app.get('/api/posts', ctrl.getPost)
app.delete('/api/posts/:id', ctrl.deletePost)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))