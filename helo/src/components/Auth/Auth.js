import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'

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
    login = () =>{
        const {username,password} = this.state
        axios.post('/api/auth/login', {username,password}).then(res =>{
            // console.log(res.data)
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err))

    };
    register = () =>{
        // console.log('hit')
        const {username,password} = this.state
        axios.post('/api/auth/register', {username,password}).then(res =>{
            this.props.getUser(res.data)
            console.log(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err))
    };

    render(){
        // console.log(this.state.username)
        // console.log(this.state.password)
        // console.log(this.props.history)
        return(
            <div className='auth'>Auth
                <div>Username:<input onChange={this.handleNameInput} placeholder='Enter Username'></input></div>
                <div>Password:<input onChange={this.handlePasswordInput} placeholder='Enter Password'></input></div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default connect(null,{getUser})(withRouter(Auth));