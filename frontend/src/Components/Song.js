import { Link } from "react-router-dom"

function Song({ song }) {
    return (
        <tr>
            <td>
                {song.name}
                <Link to={`/songs/${song.name}`}> Song </Link>
            </td>

        </tr>
    )
}

export default Song;