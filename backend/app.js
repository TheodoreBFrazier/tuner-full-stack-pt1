const cors = require('cors');
const express = require('express');
const songsController = require("./controllers/songsController")

const app = express();

app.use(cors())
app.use(express.json())
require("dotenv").config();

app.get("/", (request, response) => {
    response.send("Welcome to Tuner")
})

app.use("/songs", songsController);

app.get("*", (request, response) => {
    response.status(404).send("No page found")
})

module.exports = app;