import React from 'react'
// import axios from 'axios'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: [],
            search: '',
            userposts: true,
            
        }
    }
    // axios.get()
    // resetSearch()

    render(){
        console.log(this.state.userposts)
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