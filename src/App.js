import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hero from './components/Hero/Hero'
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';

function App() {
  return (
    <Router>
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
