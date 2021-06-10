import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard'
import Hero from './components/Hero/Hero'
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <Router>
            {/* <Dashboard /> */}
            {/* <Hero />           */}
        <Switch>
          <Route path="/home">
            <Hero/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/editProfile">
            <EditProfile/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
