import React, {Component} from 'react';
import react from '../../images/react.jpeg'; 
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink} from "react-router-dom";
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
        <div className = "tt"><img onClick={() => { history.push('/hotissue') }} src = {react}></img></div>
      </NavLink>
    </div>
    </div>
    );
}


  export default Home;