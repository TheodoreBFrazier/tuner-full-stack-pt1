import axios from "axios";
import { useEffect, useState } from "react";
import { useState, useState } from "react"
import Song from "./Song"

const API = process.env.REACT_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(API + "/songs")
            .then((response) => {
                setSongs(reponse.data);
            }).catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Songs List</th>
                            <th>See your songs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => {
                            return <Song key={song.id} song={song} />
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )


}