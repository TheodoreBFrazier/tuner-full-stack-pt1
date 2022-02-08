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
('2', 'Evan', 'My Favorite', 'This website crushes it when it comes to inspiring me', 3),
('3', 'Evan', 'My Least Favorite', 'This website crushes it when it comes to destroying my patience', 5),
('4', 'Juliana', 'I Love Going Here', 'I finally learned how to properly fold a fitted sheet', 5),
('5', 'David', 'Cool Site', 'But I got way into adding decorative pillows everywhere', 1),
('6', 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations for a ceiling fan and some spoons', 3),
('7', 'Alison', 'A lifesaver!','Helped me get my stove cleaner than I ever imagiend possible!', 4),