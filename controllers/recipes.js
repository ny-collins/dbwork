const express = require('express')
const Recipe = require('../models/recipe') // Import the Recipe model
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

// POST route to add a new recipe
router.post('/', async (req, res) => {
  console.log('Received request to add a new recipe:', req.body)
  // Log the request body for debugging
  try {
    const { name, chef, ingredients, prepTime, rating } = req.body

    // Validate the request body
    // Ensure that name, chef, and ingredients are provided
    if (!name || !chef || !ingredients) {
      return res.status(400).json({ error: 'Name, chef and ingredients are required' })
    }

    // Create a new recipe document
    const newRecipe = new Recipe({
      name,
      chef,
      ingredients,
      prepTime,
      rating,
    })

    // Save the recipe to the database
    const savedRecipe = await newRecipe.save()

    // Log and return the saved recipe
    logger.info(`New recipe added: ${JSON.stringify(savedRecipe)}`)
    res.status(201).json(savedRecipe)
  } catch (error) {
    logger.error(`Error adding recipe: ${error.message}`)
    res.status(500).json({ error: 'Failed to add recipe' })
  }
})

// PATCH route to update a recipe by ID
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(updatedRecipe);
  } catch (error) {
    logger.error(`Error updating recipe: ${error.message}`);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// DELETE route to delete a recipe by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.status(204).end(); // No content if successfully deleted
  } catch (error) {
    logger.error(`Error deleting recipe: ${error.message}`);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});


// Export the router to be used in app.js
module.exports = router