import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class Nav extends React.Component{


    handleLogOut = () =>{
        axios.post('/api/auth/logout').then(console.log('hit')).catch(err => console.log(err))
    }

    render(){
        return(
            <div className='navbar'>
            <div>
                <div>
                    <h1>HELO</h1>
                <p>{this.props.id}</p>
                <p>{this.props.username}</p>
                </div>
                <div>
                    <Link to ='dashboard'><button>Home</button></Link>
                </div>
                <div>
                    <Link to ='/new'><button>New Post</button></Link>
                </div>
                <div>
                    <Link to ='/'><button onClick={() => this.handleLogOut()}>Logout</button></Link>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    console.log(reduxState)
    const {username, profile_pic,id} = reduxState
    return{
        username,
        profile_pic,
        id
    }
}
export default connect(mapStateToProps)(Nav)