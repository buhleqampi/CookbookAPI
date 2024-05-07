const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  mealType: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  cookTime: {
    type: String,
    required: true
  },
  prepTime: {
    type: String, 
    required: true
  },
  servings: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  videoLink: {
    type: String,
    required: true
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
