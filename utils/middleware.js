const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  response.status(500).send({ error: 'something went wrong' })
}

module.exports = {
  unknownEndpoint,
  errorHandler,
}