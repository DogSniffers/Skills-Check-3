import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux';

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: [1,2],
            search: '',
            userposts: false,
            
        }
    }
    componentDidMount(){
        this.getPosts()
        // console.log(this.posts)
    }
    getPosts = () =>{
        axios.get(`/api/posts/`).then(res =>{
            // console.log(res)
            this.setState({posts:res.data})
        })
    }

    deletePost = (postId) => {
        axios.delete(`/api/posts/${postId}`).then(res =>{
            this.getPosts()
        })
    }

    getMyPosts = () => {
        // console.log(this.props)
        axios.get(`/api/myposts/`).then(res =>{
            this.setState({posts:res.data})
        })
    }

    handleSearchChange = event => {
        this.setState({search: event.target.value})
    }

    render(){
        console.log(this.state.posts)
        return(
            <div>
                <div className='dashboard'>
                Dashboard
                <input placeholder='Search Posts'></input>
                <button onClick={this.searchPosts}>Search</button>
                <button>Clear</button>
                <div className='posts'>My Posts:
                <input type='checkbox' onClick={(e) => {
                    if(e.target.checked === true){
                    this.getMyPosts()
                }else{
                    this.getPosts()
                }
                    }}></input></div>
                    <div className='post-holder'>
                {this.state.posts.map(post =>{
                    // console.log(post)
                    return <div className='post'>
                        <h1>{post.id}</h1>
                        <h1>{post.title}</h1>
                        <h1>{post.img}</h1>
                        <h1>{post.content}</h1>
                        {post.id === this.props.id ? 
                        <div>
                            <button>Edit</button>
                            <button onClick={() => this.deletePost(post.post_id)}>Delete</button>
                        </div>
                        
                        :
                        null
                        }
                    </div>
                })}
                </div>
        
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState =>{
    const {id} = reduxState
    return{
        id
    }
}


export default connect(mapStateToProps)(Dashboard);