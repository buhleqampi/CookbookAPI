const mongoose = require('mongoose');
const recipeRoutes = require("./routes/recipeRoutes");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://cookbook:aFXm9WeRwNUGByxT@cluster0.qqf2ubz.mongodb.net/?cookbook", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());

// Routes
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
