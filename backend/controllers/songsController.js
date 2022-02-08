express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, creatSong, deleteSong, updateSong }

const songsController = require("./songsController.js");