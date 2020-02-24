import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux';

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: [],
            search: '',
            userposts: true,
            
        }
    }
    componentDidMount(){
        this.getPosts()
        // console.log(this.posts)
    }
    getPosts = () =>{
        axios.get(`/api/posts/${this.props.id}`,{userposts: this.userposts,search:this.search}).then(res =>{
            console.log(res.data)
            this.setState({posts:res.data})
        })
    }


    // filterPosts = () =>{
    //     if(this.state.posts === true){
    //         if(this.state.search === ''){
    //             return
    //         }else if(this.state.search !== ''){
    //             this.state.posts.forEach(Element,index =>{
    //                 if(this.state.posts.content[index] !== this.state.search){
    //                     this.state.posts.splice(index,1)
    //                 }
    //             })
    //             }

    //     }else if(this.state.search === ''){
    //         this.state.posts.forEach(Element,index => {
    //             if(this.state.posts.user_id[index] === this.props.user_id){
    //                 this.state.posts.splice(index,1)
    //             }
    //     })
    //     }else{
    //         this.state.posts.forEach(Element,index =>{
    //             if(this.state.posts.content[index] !== this.state.search){
    //                 this.state.posts.props.splice(index,1)
    //             }
    //         })
    //     }
    // }

    render(){
        console.log(this.state.posts)
        return(
            <div>
                Dashboard
                <input placeholder='Search Posts'></input>
                <button onClick={this.searchPosts}>Search</button>
                <button>Clear</button>
                <div>My Posts:
                <input type='checkbox'></input>
        
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