import React from 'react'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: [],
            search: '',
            userposts: true,
            
        }
    }
    getPosts = () =>{
        axios.get(`/api/posts/id`, this.state.userposts,this.statesearch).then()

        
    }

    render(){
        console.log(this.state.userposts)
        const mappedPosts = this.state.posts.map()
        return(
            <div>Dashboard
                <input placeholder='Search Posts'></input>
                <button>Search</button>
                <button>Clear</button>
                <div>My Posts:
                <input type='checkbox'></input>
                </div>
            </div>
        )
        
    }
}

export default Dashboard;