import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {Redirect} from "react-router-dom";
import '../../App.css';
import Edit from '../../components/pages/EditBoard';
import List from "../../components/ListContentComponent";
import MenuBar from "../../components/pages/MenuBar";
const AskBoard = ({ history, match }) => {
  return (
      <div className="r">
          <h1>질문게시판</h1>
          <Router>
            <Switch>
              <Route exact path={match.path} component={List} />
            </Switch>
          </Router>
          <div className="rr">
              <button className="btn1" onClick={() => { history.push('/edit') }}>
                  글쓰기
          </button>
          </div>
          
      </div>
  );
};
  

  export default AskBoard;