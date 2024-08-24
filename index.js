const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require("./routes/recipeRoutes");
const app = express();
const PORT = process.env.PORT || 4000;
require('dotenv').config();
// const connectionString = require("./config/db.config")

// // Connect to MongoDB
mongoose.connect(process.env.URL).then(() => {
  console.log("connected to db")
})

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use("/recipes", recipeRoutes);


app.get("/", (req, res) => {
  res.status(200).send("The server is running.....");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
