import React, {Component} from "react";
import Background from '../../images/LoginHome.jpg'; 
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink} from "react-router-dom";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginPaper from '../design/LoginPaper';
import BackGround from '../design/BackGround';
import Button from '@material-ui/core/Button';
import '../../App.css';


const LoginHome = ({ history }) =>  {
    return(
        <div>
        {/*<img src = {Background} alt= "Background"></img>*/}
        <BackGround/>
        <LoginPaper />
            <div className = "rr">
                <Button variant = "contained" color = "secondary" onClick={() => { history.push('/HomeApp') }}> 그냥 볼래유 ㅡㅜ</Button>
            </div>
        </div>
    );
}

export default LoginHome;