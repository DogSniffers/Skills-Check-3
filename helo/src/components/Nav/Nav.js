import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div className='navbar'>Helo
            <div>
                <div>
                <p>{this.props.username}</p>
                <img>{this.props.profile_pic}</img>
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
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    // console.log(reduxState)
    const {username, profile_pic} = reduxState
    return{
        username,
        profile_pic,
    }
}
export default connect(mapStateToProps)(Nav)