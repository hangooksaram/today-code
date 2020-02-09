import React, { Component } from "react";
import Background from './images/LoginHome.jpg';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/pages/HomeApp';
import LoginHome from "./components/pages/LoginHome";
import HomeApp from "./components/pages/HomeApp";
import Home from "./components/pages/Home";
import DiscussBoard from "./components/pages/DiscussBoard";
import AskBoard from "./components/pages/AskBoard";
import About from "./components/pages/AboutBoard";
import HotIssueBoard from "./components/pages/HotIssueBoard";
import MenuBar from "./components/pages/MenuBar";
import queryString from 'query-string';
class App extends Component {
  render(){
    return (
      <div> 
        <Router>
          <Switch>
            <Route exact path="/" component={LoginHome} />
            {<MenuBar/>}
            <Route path="/HomeApp" component={HomeApp} />
            <Route path="/Home" component={Home} />
            <Route path="/discuss" component={DiscussBoard} />
            <Route path="/ask" component={AskBoard} />
            <Route path="/about" component = {About} />
            <Route path="/hotissue" component = {HotIssueBoard} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;