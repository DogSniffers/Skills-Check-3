import React from 'react'
// import axios from 'axios'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: [],
            search: '',
            userposts: true
        }
    }
    // axios.get()
    // resetSearch()

    render(){
        return(
            <div>Dashboard</div>
        )
    }
}

export default Dashboard;