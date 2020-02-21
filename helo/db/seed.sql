CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT,
    FOREIGN KEY (author_id) REFERENCES user(id)
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id int FOREIGN KEY REFERENCES user(id)
)