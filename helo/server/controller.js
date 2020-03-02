const bcrypt = require('bcryptjs')

module.exports ={
    getPosts: async (req,res) =>{
        // const {userposts,search} = req.body
        const db = req.app.get('db')
        const posts = await db.get_posts()
        // console.log(posts)
        res.status(200).send(posts)
       
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
        // console.log(user)
        if(accountName){
            return res.status(400).send('Username already in Use')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)
        // console.log(hash,username)

        let newUser = await db.register({username,hash})
        // console.log(newUser)
        session.user = newUser
        // console.log(session.user)
        res.status(200).send(session.user)
    },

    newPost: (req,res) =>{
        const db = req.app.get('db')
        const {id} = req.params
        const {title,img,content} = req.body
        // console.log(title,img,content,id)
        db.add_post([title,img,content,id]).then(() =>{
            res.sendStatus(201)
        }).catch(err => console.log(err))
    },

    deletePost: (req,res) =>{
        const {id} = req.params
        // console.log(id)
        const db = req.app.get('db')
        db.delete_post([id]).then(() =>{
            res.sendStatus(200)
        }).catch(() =>{
            res.sendStatus(500)
        })
    },

    addPost: (req,res) => {
        const {title,img,content} = req.body
        const {id} = req.params
        const db = req.app.get('db')
        db.add_post([title,img,content,id]).then(() =>{
            res.sendStatus(200)
        }).catch(() => {
            res.sendStatus(500)
        })
    },

    getMyPosts: async (req,res) => {
        const {id} = req.session.user
        // console.log(id)
        const db = req.app.get('db')
        const posts = await db.get_my_posts([id])
        res.status(200).send(posts) 
    },

    logout: (req,res) => {
        req.session.destroy
        res.sendStatus(200)
    },

    editPost: async (req,res) => {
        const db = req.app.get('db')
        const {title,image,content,id} = req.body
        const editedPost = await db.edit_post([title,image,content,id])
        res.status(200).send(editedPost)
    }

    
}