import React from 'react'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state ={
            posts: [],
            search: '',
            userposts: true
        }
    }

    render(){
        return(
            <div>Dashboard</div>
        )
    }
}

export default Dashboard;