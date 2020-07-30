import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Nav from './comp/Nav'
import Data from './comp/Data'
import Login from './comp/Login'
import Register from './comp/Register';
import FormUpload from './comp/FormUpload';
import Profile from './comp/Profile';



function App() {
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Data}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/upload' component={FormUpload}/>
        <Route exact path='/profile/:userid' component={Profile}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
