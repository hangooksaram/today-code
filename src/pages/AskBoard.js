import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import '../App.css';
import Edit from '../Edit';
class AskBoard extends Component{
    render() {
      return(
        <div>
          <div className = "r">
            <h1>질문하세요</h1>
            <h2>질문하는 질문게시판</h2>  
          </div>
          <Router>
          <Switch>
          <Route path="/edit" component={Edit} />
          </Switch>
          <div className = "rr">
            <Link to="/edit">
              <button className = "btn1">글쓰기</button>
            </Link>
          </div>
          </Router>
        </div>    
      );
    }
  }

  export default AskBoard;