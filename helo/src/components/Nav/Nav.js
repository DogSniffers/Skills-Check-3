import React from 'react'
import {Link} from 'react-router-dom';

class Nav extends React.Component{

    render(){
        return(
            <div>Nav
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

export default Nav