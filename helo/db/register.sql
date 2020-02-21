INSERT INTO usersHelo (
    username,
    password
)
VALUES(
    ${username}
    ${hash}
)
RETURNING  id, username