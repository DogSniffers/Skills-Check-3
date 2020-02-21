INSERT INTO usershelo (
    username,
    password
)
VALUES(
    ${username}
    ${hash}
)
RETURNING  id, username