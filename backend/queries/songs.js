const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
}

const getSong = async (index) => {
    try {
        const oneSong = await db.one(
            "SELECT * FROM songs WHERE id=$1",
            index
        )
        return oneSong; 
    } catch (error) {
        return error;
    }
}

module.exports = {
    getAllSongs,
    getSong,
}