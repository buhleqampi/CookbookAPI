const express = require("express");
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route for creating a recipe
router.post("/add-recipe", recipeController.createRecipe);

// Route for getting all recipes
router.get("/get-all-recipes", recipeController.getAllRecipes);

// Route for getOneRecipe
router.get("/get-one-recipe/:id", recipeController.getOneRecipe);

module.exports = router;