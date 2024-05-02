require("dotenv").config();

const express = require("express");
const app = express()
const mongoose = require('mongoose');
const cors = require("cors")

mongoose.connect('mongodb+srv://cookbook:aFXm9WeRwNUGByxT@cluster0.qqf2ubz.mongodb.net/?cookbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error(err));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Deli" });
});

const PORT = process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log(`server is running ${PORT}`)
})