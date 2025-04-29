require ('dotenv').config()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

module.exports = {
  PORT,
  MONGO_URL,
}


// This file contains the configuration for the application
// It includes the port number and the MongoDB connection URL
// The port number is set to 3003 and the MongoDB connection URL is set to a specific database
// The MongoDB connection URL includes the username, password, and database name
// The port number is set to listen on IPv6 loopback address