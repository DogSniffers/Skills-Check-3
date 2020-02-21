INSERT INTO user (
    username,
    password
)
VALUES(
    ${username}
    ${hash}
)
RETURNING  id, username