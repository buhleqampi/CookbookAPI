const Recipe = require("../models/recipeModel");
const mongoose = require('mongoose');

// Controller for creating a recipe
exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    res.status(500).send({ message: "Could not create recipe", error: error.message });
  }
};

// Controller for getting all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    res.status(500).send({ message: "Could not fetch recipes", error: error.message });
  }
};
// Controller for deleting 
exports.deleteAllRecipes = async (req, res) => {
  try {
    await Recipe.deleteMany({});
    res.send({ message: "All recipes deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Could not delete recipes", error: error.message });
  }
};


// Controller for getting one recipe by ID
exports.getOneRecipe = async (req, res) => {
  try {
    const {id} = params.id
    const recipe = await Recipe.findById(id);
    return recipe ? res.send(recipe) : res.status(404).send({ message: "Recipe not found" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};
