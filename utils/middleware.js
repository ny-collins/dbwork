const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info(`Method: ${req.method}`)
  logger.info(`Path:   ${req.path}`)
  
  // Safely check if req.body exists and has keys
  if (req.body && Object.keys(req.body).length > 0) {
    logger.info(`Body:   ${JSON.stringify(req.body)}`)
  } else {
    logger.info('Body:   (empty)')
  }
  
  logger.info('---')
  next()
}

// Middleware to handle unknown endpoints
// This middleware should be placed after all other routes
// to catch any requests that don't match existing routes
// It sends a 404 status code and a JSON response with an error message
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
