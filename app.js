const path = require('path')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const recipesRouter = require('./controllers/recipes')

const app = express()

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URL)
  .then(() => logger.info('Connected to MongoDB✅'))
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error.message)
    process.exit(1) // Exit the app with an error code
  })

  app.use(cors());
  app.use(express.json());           // ✅ Parse JSON body first
  app.use(middleware.requestLogger); // ✅ Now logger sees the parsed body
  
app.use(express.static(path.join(__dirname, 'frontend'))) // Serve static files from the frontend directory

app.use('/api/recipes', recipesRouter)  // Your recipes router for the /api/recipes route

// Set up routes
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'frontend', 'index.html')) // Serve the index.html file
}
)


// Handle unknown endpoints and errors at the end of the middleware stack

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
