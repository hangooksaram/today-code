import React, {Component} from 'react';
import react from '../../images/react.png'; 
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink} from "react-router-dom";
import HotIssueBoard from "../../components/pages/HotIssueBoard";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home = ({ history}) =>{
    return (
      <div>
    <div className = "tt">
      <h1>홈화면</h1>
      </div>
      <div className = "ll">
      <NavLink to = "/hotissue">
        <img onClick={() => { history.push('/hotissue') }} src = {react}></img>
      </NavLink>
    </div>
    </div>
    );
}


  export default Home;