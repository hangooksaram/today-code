import React, {Component} from 'react';
import react from './images/react.png'; 
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink} from "react-router-dom";
import HotIssueBoard from "./pages/HotIssueBoard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component{
  render(){
    return (
    <div className = "tt">
      <h1>홈화면</h1>
      <Router>
      <NavLink to = "/hotissue">
        <img src ={react} alt = "HomeHot1"></img>
      </NavLink>
      <main>
        <Switch>
          <Route path="/hotissue" component={HotIssueBoard} />
        </Switch>
      </main>
      </Router>
    </div>
    );
  }
}


  export default Home;