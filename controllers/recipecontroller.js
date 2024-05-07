const Recipe = require("../models/recipeModel");
const mongoose = require('mongoose');


//Remove this commented code
// Connect to MongoDB using provided URL
// mongoose.connect("mongodb+srv://cookbook:aFXm9WeRwNUGByxT@cluster0.qqf2ubz.mongodb.net/?cookbook", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


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


exports.getOneRecipe = async (req, res) => {
  try {
    const {id} = req.params
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).send({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};