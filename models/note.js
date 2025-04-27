const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
  name: String,
  chef: String,
  ingredients: String,
  prepTime: Number,
  rating: Number,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe