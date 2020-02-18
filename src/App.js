import React, { Component } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './components/pages/HomeApp';
import LoginHome from "./components/pages/LoginHome";
import HomeApp from "./components/pages/HomeApp";
import Like from "./components/pages/Like";
import Menu from "./components/pages/Menu";
import Recent from "./components/pages/Recent"; 
import Home from "./components/pages/Home";
import FirstHome from "./components/pages/FirstHome"
import queryString from 'query-string';
class App extends Component {
  render(){
    return (
      <div> 
        <Router>
          <Switch>
            <Route exact path="/" component={LoginHome} />
            {<Menu/>}
            <Route path="/Menu" component={Menu} />
            <Route path= "/Home" component={Home}/>
            <Route path="/Recent" component={Recent} />
            <Route path="/Likes" component={Like} />
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;