CREATE TABLE usersHelo (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(250),
    profile_pic TEXT
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    id int REFERENCES usersHelo(id)
);