import React, { Component } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import LoginHome from "./components/pages/LoginHome";
import Like from "./components/pages/Like";
import Menu from "./components/pages/Menu";
import Recent from "./components/pages/Recent"; 
import Home from "./components/pages/Home";
import MyPage from "./components/pages/MyPage"
import Edit from "./components/pages/Edit"
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
            <Route path="/MyPage" component={MyPage} />
            <Route path="/Edit" component={Edit}/>
          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;