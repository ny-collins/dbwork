const express = require('express')
const Recipe = require('../models/note') // Import the Recipe model
const logger = require('../utils/logger') // Import the logger utility

const router = express.Router()

// Route to handle GET requests to /api/recipes
router.get('/', async (req, res) => {
  try {
    // Fetch all recipes from the database
    const recipes = await Recipe.find({})
    
    // Log the retrieved data
    logger.info(`Data retrieved: ${JSON.stringify(recipes)}`)
    
    // Send the data as a JSON response
    res.json(recipes)
  } catch (error) {
    // Log any errors that occur during the database query
    logger.error(`Error retrieving data: ${error.message}`)
    
    // Send a 500 Internal Server Error response
    res.status(500).json({ error: 'Failed to retrieve recipes' })
  }
})

// Export the router to be used in app.js
module.exports = router