import React from 'react';
import {withRouter} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Nav from './components/Nav/Nav';
import route from './routes';
import './App.css';

function App(props) {
  // console.log(props.location.pathname)
  return (
    <div className="App">
    {props.location.pathname === '/'|| 
    props.location.pathname === '/' ? (
      <>
      <Auth/>
      {route}
      </>
    ):(
      <>
      <Nav/>
      {route}
      </>
    )}
      
    </div>
  );
}

export default withRouter(App);
