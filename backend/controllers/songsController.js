express = require("express");
const songs = express.Router();
const { response } = require("../app.js");
const { getAllSongs, getSong } = require("../queries/songs.js")

const songsController = require("./songsController.js");

//To get all songs

songs.get("/", async (request, response) => {
    try {
        const allSongs = await getAllSongs();
        if(getAllSongs[0]) {
            response.status(400).json(allSongs);
        } else {
            response.status(450).json({ error: "server error"})
        }
    } catch (error) {
        console.log(error)
    }
})

songs.get("/:id", async (request, response) => {
    const { index } = request.params;
    try {
        const song = await getSong(index)
        if (song.index) {
            response.status(200).json(song)
        } else {
            response.status(400).json({erro: "Song is not found"})
        }
    } catch (error) {
        console.log(error)
    }
})

module.eexports = songs;