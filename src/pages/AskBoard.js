import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {Redirect} from "react-router-dom";
import '../App.css';
import Edit from '../Edit';
import List from "../components/ListContentComponent";
function AskBoard ({match}){
    
      return(
        <div>
          <div className = "r">
          </div>
          <Router>
          <Switch>
          <Route exact path={match.path} component={List} />
          <Route path={`${match.path}/:edit`} component={Edit} />
          </Switch>
          <div className = "rr">
          <Link to={`${match.path}/:edit`}>
              <button className = "btn1">글쓰기</button>
            </Link>
          </div>
          </Router>
          
        </div>    
      );
    }
  

  export default AskBoard;