const bcrypt = require('bcryptjs')

module.exports ={
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
        if(authenticated){
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        }else{
            res.status(400).send('Incorrect Password ;(')
        }

    },
    register: async (req,res) => {
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        let user = await db.check_user([username])
        user = user[0]
        if(user){
            return res.status(400).send('Username already in Use')
        }
        const salt = bcrypt.genSaltSync(20)
        const hash = bcrypt.hashSync(password,salt)

        let newUser = db.register({username,hash})
        session.user = newUser
        res.status(200).send(session.user)
    }

    
}