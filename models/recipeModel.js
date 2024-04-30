const mongoose = require ('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    ingredients:{
        type: String, required: true
    },
    instructions:{
        type: String, required: true
    },
    mealType:{
        type: String, required: true
    },
    cuisine:{
        type: String, required: true
    },
    difficulty:{
        type: String, required: true
    },
    PrepTime:{
        type: String, required: true
    },
    cookTime:{
        type: String, required: true
    },
    servings:{
        type: String, required: true
    },
    image:{
        type: String, required: true
    },
    videoLink:{
        type: String, required: true
    },
});

module.exports = mongoose.model('recipeModel', recipeSchema)