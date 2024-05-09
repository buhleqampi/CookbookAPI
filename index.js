const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require("./routes/recipeRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
const connectionString = require("./config/db.config")

// // Connect to MongoDB
mongoose.connect(connectionString.url).then(() => {
  console.log("connected to db")
})

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
