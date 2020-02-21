import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'

class Post extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: '',
            author:'',
            authorPicture:''
        }
    }
    // axios.get()


    render(){
        return(
            <div>Post
                <button>Delete</button>
            </div>
        )
    }
}
const mapStateToProps= reduxState => {
    const {id} = reduxState
    return{
        id
    }

}

export default connect(mapStateToProps)(Post)