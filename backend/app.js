const cors = require('cors');
const express = requires('express');

const app = express();

app.use(cors())
app.use(express.json())
require("dotenv").config();

app.use("/songs", songsController);

app.get("*", (request, response) => {
    response.status(404).send("No page found")
})

module.exports = app;