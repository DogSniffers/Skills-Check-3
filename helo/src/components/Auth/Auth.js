import React from 'react'
import Axios from 'axios'

class Auth extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password:''
        }
    }

    handleNameInput = event =>{
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordInput = event =>{
        this.setState({
            password:event.target.value
        })
    }
    // handleChange()
    // login()
    register = () =>{
        const {username,password} = this.state
        Axios.post('/api/auth/register', {username,password}).then(res =>{
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err))
    }

    render(){
        // console.log(this.state.username)
        // console.log(this.state.password)
        return(
            <div>Auth
                <div>Username:<input onChange={this.handleNameInput}></input></div>
                <div>Password:<input onChange={this.handlePasswordInput}></input></div>
                <button>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default Auth;