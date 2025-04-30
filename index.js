const http = require('http');
const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');

// Use the full PORT directly (Render assigns it)
const port = config.PORT || 3003;

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server running on port ${port} ✅`);
});
