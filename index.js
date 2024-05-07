const mongoose = require('mongoose');
const recipeRoutes = require("./routes/recipeRoutes");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectionString = require("./config/db.config")

// // Connect to MongoDB
mongoose.connect(connectionString.url).then(() => {
  console.log("connected to db")
})

// const db = mongoose.connection;
// console.log(connectionString.url)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

app.use(express.json());

// Routes
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
