import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends React.Component{

    render(){
        // console.log(this.props)
        return(
            <div>Nav
                <div>
                <p>{this.props.username}</p>
                <img>{this.props.profilePic}</img>
                </div>
                <div>
                    <Link to ='dashboard'><button>Home</button></Link>
                </div>
                <div>
                    <Link to ='/new'><button>New Post</button></Link>
                </div>
                <div>
                    <Link to ='/'><button>Logout</button></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState =>{
    const {username, profilepic} = reduxState
    return{
        username,
        profilepic
    }
}
export default connect(mapStateToProps)(Nav)