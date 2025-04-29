const http = require('http')
const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

// Extract host and port from the IPv6 format
const [host, port] = config.PORT.split(']:')
const formattedHost = host.replace('[', '') // Remove brackets from the host

const server = http.createServer(app)

server.listen(port, formattedHost, () => {
  logger.info(`Server running on ${formattedHost}:${port} ✅`)
})