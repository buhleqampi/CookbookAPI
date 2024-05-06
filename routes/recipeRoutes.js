const express = require("express");
const router = express.Router();
const recipeController = require('../controllers/recipecontroller');

// Route for creating a recipe
router.post("/", recipeController.createRecipe); // change the first parameter to "/add-recipe"

// Route for getting all recipes
router.get("/", recipeController.getAllRecipes);  // change the first parameter to "/get-all-recipes"

// Add the getOneRecipe router
module.exports = router;
