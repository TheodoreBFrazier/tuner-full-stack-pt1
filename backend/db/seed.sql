DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite boolean
);

INSERT INTO songs (song_id, name, artist, album )
VALUES
('1', 'The Four Seasons', 'Antonio Vivaldi', 'Classical Music 101', 500, false),
('2', 'Oboe Concerto', 'Telemann', 'Oboe Essentials', 300, true),
('3', 'Cello Dance', 'Yo-Yo Man', 'Bach Essentials', 500, true),
