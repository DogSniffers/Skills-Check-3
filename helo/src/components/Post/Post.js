import React from 'react'
// import axios from 'axios'

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

export default Post