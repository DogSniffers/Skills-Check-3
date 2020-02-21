require('dotenv').config()
const express = require('express');
const massive = require('massive');
// const session = require('express-session')
const controller = require ('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }

}).then(db =>{
    const port = SERVER_PORT
    app.set('db', db)
    app.listen(port|| 4000, () => console.log(`Listening on ${port}`))
})
