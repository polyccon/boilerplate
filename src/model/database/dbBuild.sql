BEGIN;

  DROP TABLE IF EXISTS users CASCADE;

  CREATE TABLE table1 (
    id SERIAL PRIMARY KEY,
    variable1 VARCHAR(300) NOT NULL,
    variable2 VARCHAR(300) NOT NULL
  );

DROP TABLE IF EXISTS table2 CASCADE;

  CREATE TABLE table2 (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES table(id),
    variable3 VARCHAR(300),
    image_url VARCHAR(2083),
    booleanvar BOOLEAN,
    numbervar INTEGER
  );

COMMIT;
