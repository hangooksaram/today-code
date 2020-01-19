import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import '../App.js';
import '../App.css';
import Edit from '../Edit';
import List from "../components/ListContentComponent";
import Home from "../Home"; 
function DiscussBoard ({match}){
  alert('hello discussBoard');
  return(
    <div>
      <div className = "r">
      <h1>토론게시판</h1> 
      </div>
      <Router>
        <Switch>
          <Route exact path={match.path} component={List} />
          <Route path={`${match.path}/:edit`} component={Edit} />
          <Route path="/Home" component={Home} />
        </Switch>
        <div className = "rr">
        <Link to={`${match.path}/:edit`}>
            <button className = "btn1" >글쓰기</button>
        </Link>
        </div>
      </Router>
      
    </div>    
  );
}

  export default DiscussBoard;