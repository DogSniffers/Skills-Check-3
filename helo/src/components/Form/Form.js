import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'
// import axios from 'axios'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            title:'',
            img:'',
            content:''
        }
    }

    handleTitleChange = event =>{
        this.setState({title: event.target.value})
    }
    handleImgChange = event =>{
        this.setState({img: event.target.value})
    }
    handleContentChange = event =>{
        this.setState({content: event.target.value})
    }
    addPost = () => {
        Axios.post(`/api/post/${this.props.id}`,{title:this.state.title, img:this.state.img,content:this.state.content}).then().catch(err => console.log(err))
    }



    render(){
        // console.log(this.state)
        // console.log(this.props)
        return(
            <div>New Post:
                <input  onChange = {this.handleTitleChange}placeholder='Title'></input>
                <input onChange = {this.handleImgChange}placeholder='Image URL'></input>
                <input onChange = {this.handleContentChange}placeholder='Content'></input>
                <div><Link to ='/dashboard'>
                <button onClick={this.addPost}>Post</button></Link></div>
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

export default connect(mapStateToProps)(withRouter(Form));