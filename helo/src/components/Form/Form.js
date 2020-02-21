import React from 'react'
import {connect} from 'react-redux'
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
        Axios.post(`/api/post/:${this.props.reduxState.id}`)
    }



    render(){
        console.log(this.state)
        return(
            <div>New Post:
                <input  onChange = {this.handleTitleChange}placeholder='Title'></input>
                <input onChange = {this.handleImgChange}placeholder='Image URL'></input>
                <input onChange = {this.handleContentChange}placeholder='Content'></input>
                <button>Post</button>
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

export default connect(mapStateToProps)(Form);