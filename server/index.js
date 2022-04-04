const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
console.log('this is port', PORT)
const ctrl = require('./controller')
const { getPost } = require('./controller')

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
app.post('/api/signup', ctrl.signUp)
app.post('/api/user', ctrl.logIn)
app.post('/api/posts', ctrl.createPost)
app.get('/api/posts/:id', ctrl.getPost)
app.delete('/api/posts/:id', ctrl.deletePost)
// app.post('/api/reviews', ctrl.createReview)
// app.get('/api/reviews/:id', ctrl.getReview)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))