import React from 'react';
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import Auth from './components/Auth/Auth'
import Post from './components/Post/Post'
import Nav from './components/Nav/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard/>
      <Post/>
      <Auth/>
      <Form/>
    </div>
  );
}

export default App;
