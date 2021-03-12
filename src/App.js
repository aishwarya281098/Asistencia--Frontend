import React from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Signup/>
      <Router>
      <Route path="/user/login" component={Login}></Route>
      <Route path="/user/signup" component={Signup}></Route>
      </Router>
    </div>
  );
} 

export default App;
