import React from 'react';
import {withRouter} from 'react-router-dom'
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import Auth from './components/Auth/Auth'
import Post from './components/Post/Post'
import Nav from './components/Nav/Nav'
import route from './routes'
import './App.css';
import routes from './routes';

function App(props) {
  console.log(props.location.pathname)
  return (
    <div className="App">
    {props.location.pathname === '/'|| 
    props.location.pathname == '/dashboard' ? (
      <>
      <Auth/>
      {routes}
      </>
    ):(
      <>
      <Nav/>
      {routes}
      </>
    )}
      
    </div>
  );
}

export default withRouter(App);
