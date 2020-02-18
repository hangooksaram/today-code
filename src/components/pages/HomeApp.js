import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar,FormControl, NavItem, Col,  Form, FormGroup, Label, Input, FormText} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import fade from '@material-ui/core/styles/colorManipulator';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
//Link -> a href 태그와 같다고 보면됨
//Router는 Link와 Route를 묶어준다고 보면 됨

import EditBoard from "./EditBoard";

const topbg = {
  background : '#000000',
  marginBottom :30
};

const bgc = {
  backgroundColor : 'white'
}

const margin = {
  marginRight : 10
}

const menubg = {
  background : '#FFFFFF',
  flexGrow : 1,
  justifyContent: 'center'
}

const styles = theme => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15)
})

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    marginRight : 190
  },
  font: {
    color:'white'
  },
  bgc: {
    backgroundColor : 'white'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),    
    width: 240,
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

/*
<Subject title = {this.state.title}>
      </Subject>
*/
const HomeApp = ({ history, match}) =>{
  const classes = useStyles();
    return (
    <div>
      <Router> 
      <div className={classes.root}>
      <CssBaseline/>
      <div className={clsx('HomeApp', classes.root)}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography>I'm the Sidebar</Typography>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography>I'm the content</Typography>
        </Container>
      </main>
    </div>
    </div>
    </Router>
    </div>
    )
} //index.js에서 여러개 import해서 못쓰는가...
  //component = {App} 하면 왜안될까...
export default HomeApp;

