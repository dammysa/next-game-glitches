CREATE TABLE posts (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  game TEXT NOT NULL,
  description TEXT NOT NULL,
  video_url TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
 /*https://hightouch.com/sql-dictionary/sql-now*/
  )

  CREATE TABLE comments (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE, /*Leave No Orphans! https://dba.stackexchange.com/questions/44956/good-explanation-of-cascade-on-delete-update-behavior*/
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP

  )

 ALTER TABLE posts ADD COLUMN username TEXT NOT NULL DEFAULT 'Anonymous'

  INSERT INTO posts (title, game, description, video_url)
  VALUES (
    'Assault on the Control Room Bridge Drop Skip',
    'Halo Combat Evolved',
    'It is possible to drop from the first bridge in the level to the canyon floor below, which breaks enemy spawn triggers for the rest of the level.',
    'https://www.youtube.com/shorts/L_CJFrnR03M'
  )
 
 UPDATE posts Set username = 'SammyD' Where id = 1

 INSERT INTO posts (title, game, description, video_url)
 VALUES (
  'Swing Set Launcher',
  'Grand Theft Auto 4',
  'This glitch can be triggered inside a vehicle or on foot when you hit hard against the playground swing set, which will catapult you hundreds of feet above the ground, launching your vehicle almost halfway around the City.',
  'https://www.youtube.com/shorts/4uxrHNv8cWo'
 )

 ALTER TABLE posts ADD COLUMN slug TEXT

UPDATE posts
SET slug = REPLACE(LOWER(title), ' ', '-') /* https://stackoverflow.com/questions/3082588/t-sql-function-for-generating-slugs */
WHERE slug IS NULL