const express = require('express')
const Recipe = require('../models/note')

const router = express.Router()

router.get('/', (request, response) => {
   Recipe.find({}).then((recipes) => {
    response.json(recipes)
  })
})

router.post('/', (request, response) => {
  const recipe = new Recipe(request.body)

  recipe.save().then((result) => {
    response.status(201).json(result)
  })
})

module.exports = router