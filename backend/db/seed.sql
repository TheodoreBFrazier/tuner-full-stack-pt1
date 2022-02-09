\c songs_dev

INSERT INTO songs (id, name, artist, album, time, is_favorite)
VALUES
('1', 'The Four Seasons', 'Antonio Vivaldi', 'Classical Music 101', 500, false),
('2', 'Oboe Concerto', 'Telemann', 'Oboe Essentials', 300, true),
('3', 'Cello Dance', 'Yo-Yo Man', 'Bach Essentials', 500, true);

-- run psql -U postgres -f db/seed.sql
