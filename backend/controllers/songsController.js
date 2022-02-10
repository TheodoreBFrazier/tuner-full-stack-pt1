express = require("express");
const songs = express.Router();
const { response } = require("../app.js");
const { getAllSongs, getSong, createSong } = require("../queries/songs.js")


//To get all songs

songs.get("/", async (request, response) => {
    try {
        const allSongs = await getAllSongs();
        if (allSongs[0]) {
            response.status(200).json(allSongs);
        } else {
            response.status(450).json({ error: "server error" })
        }
    } catch (error) {
        console.log(error)
    }
})

songs.get("/:id", async (request, response) => {
    const { id } = request.params;
    try {
        const song = await getSong(id)
        if (song.id) {
            response.status(200).json(song)
        } else {
            response.status(400).json({ error: "Song is not found" })
        }
    } catch (error) {
        console.log(error)
    }
})


songs.post("/", async (request, response) => {
    const { id } = request.params;

    try {
        const createdSong = await createSong(body);
        if (createdSong.id) {
            response.status(200).json(createdSong);
        } else {
            response.status(400).json({ error: "Bookmark was not created" })
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = songs;