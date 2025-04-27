const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const notesRouter = require('./controllers/notes')

const app = express()

mongoose
  .connect(config.MONGO_URL)
  .then(() => logger.info('Connected to MongoDB'))
  .catch((error) => logger.error('Error connecting to MongoDB:', error.message))


app.get('/', (request, response) => {
    response.send('Welcome to the Recipe API! Use /api/recipes to access the recipes.')
})

app.use(express.json())
app.use('/api/recipes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app