\c songs_dev

INSERT INTO songs (id, name, artist, album, time, is_favorite)
VALUES
('1', 'The Four Seasons', 'Antonio Vivaldi', 'Classical Music 101', 500, false),
('2', 'Oboe Concerto', 'Telemann', 'Oboe Essentials', 300, true),
('3', 'Cello Dance', 'Yo-Yo Man', 'Bach Essentials', 500, true);
('4', 'Fur Elise', 'Ludwig Van Beethoven', 'Beethoven', 500, true);
('5', 'Phantasy Quartet', 'Benjamin Briteen', '20th Century', 600, false);

-- run psql -U postgres -f db/seed.sql
