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
        axios.get('/api/posts/id').then(res =>{
            this.setState({posts:res.data})
        })
        if(this.state.posts === true){
            if(this.state.search === ''){
                return
            }else if(this.state.search !== ''){
                this.state.posts.forEach(Element,index =>{
                    if(this.state.posts.content !== this.state.search){
                        this.state.posts.splice(index,1)
                    }
                })
                }

        }else if(this.state.search === ''){
            this.state.posts.forEach(Element,index => {
                if(this.state.posts.user_id === this.props.user_id){
                    this.state.posts.splice(index,1)
                }
        })
        }else{
            this.state.posts.forEach(Element,index =>{
                if(this.state.posts.content !== this.state.search){
                    this.state.posts.props.splice(index,1)
                }
            })
        }

        
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