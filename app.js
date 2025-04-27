const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const notesRouter = require('./controllers/notes')

const app = express()

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URL)
  .then(() => logger.info('Connected to MongoDB'))
  .catch((error) => logger.error('Error connecting to MongoDB:', error.message))

// Apply the requestLogger middleware first to capture all requests
app.use(middleware.requestLogger)

// Set up routes
app.get('/', (request, response) => {
  response.send('Welcome to the Recipe API! Use /api/recipes to access the recipes.')
})

app.use(express.json())  // Middleware to parse incoming JSON requests
app.use('/api/recipes', notesRouter)  // Your notes router for the /api/recipes route

// Handle unknown endpoints and errors at the end of the middleware stack
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
