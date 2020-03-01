require('dotenv').config()
const express = require('express');
const session = require('express-session')
const massive = require('massive');
// const session = require('express-session')
const controller = require ('./controller')
const {SERVER_PORT, CONNECTION_STRING,SESSION_SECRET} = process.env
const app = express()
app.use(express.json())

app.use(
    session({
        resave:false,
        saveUninitialized:true,
        rejectUnauthorized:false,
        cookie:{maxAge: 1000 * 60 * 60},
        secret: SESSION_SECRET

    })
)
massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }
}).then(db =>{
    const port = SERVER_PORT
    app.set('db', db)
    app.listen(port|| 4000, () => console.log(`Listening on ${port}`))
});

app.post('/api/auth/register', controller.register);
app.post('/api/auth/login', controller.login);
app.post('/api/auth/logout', controller.logout);
app.get(`/api/posts/`, controller.getPosts);
app.get(`/api/myposts/`, controller.getMyPosts);
app.post(`/api/post/:id`, controller.newPost);
app.delete(`/api/posts/:id`, controller.deletePost);
// app.put(`/api/posts`, controller.editPost);
