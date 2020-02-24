const bcrypt = require('bcryptjs')

module.exports ={
    getPosts: async (req,res) =>{
        const {id} = req.params
        const {userpost,search} = req.body
        const db = req.app.get('db')
        const posts = db.get_posts([id])
        if(posts[0]){
            if(userposts === true){
           const userPosts = pos
        }
    }
        else{
            res.status(400).send('NO POSTS BRO')
        }
    },
    login: async (req, res) => {
        const {username,password} = req.body
        const {session} = req
        const db = req.app.get('db')
        let user = await db.check_user([username])
        user = user[0]
        if(!user){
            return res.status(400).send('Username Not Found')
        }
        const authenticated = bcrypt.compareSync(password, user.password)
        if(authenticated === true){
            delete user.password
            session.user = user
            res.status(202).send(session.user)
        }else{
            res.status(400).send('Incorrect Password ;(')
        }

    },
    register: async (req,res) => {
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        accountName = user[0]
        console.log(user)
        if(accountName){
            return res.status(400).send('Username already in Use')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)
        console.log(hash,username)

        let newUser = await db.register({username,hash})
        console.log(newUser)
        session.user = newUser
        res.status(200).send(session.user)
    },

    newPost: (req,res) =>{
        const db = req.app.get('db')
        const {id} = req.params
        const {title,img,content} = req.params
        db.add_post([title,img,content]).then(() =>{
            res.sendStatus(201)
        }).catch(err => console.log(err))
    },

    deletePost: (req,res) =>{
        const db = req.app.get('db')
    }

    
}