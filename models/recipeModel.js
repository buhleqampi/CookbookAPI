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
  totalCookingTime: {
    type: Number,
    required: true
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
