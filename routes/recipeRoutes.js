const express = require("express");
const router = express.Router();
const recipeController = require('../controllers/recipecontroller');

// Route for creating a recipe
router.post("/", recipeController.createRecipe);

// Route for getting all recipes
router.get("/", recipeController.getAllRecipes);

module.exports = router;
