import React, {Component} from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar,FormControl, NavItem, Col,  Form, FormGroup, Label, Input, FormText} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TopBar from '../design/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import fade from '@material-ui/core/styles/colorManipulator';
import Box from '@material-ui/core/Box';
//Link -> a href 태그와 같다고 보면됨
//Router는 Link와 Route를 묶어준다고 보면 됨

import Home from "./Home";
import About from "./AboutBoard";
import AskBoard from "./AskBoard";
import DiscussBoard from "./DiscussBoard";
import HotIssueBoard from "./HotIssueBoard";
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
    flexGrow: 1,
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
  }
}));

class Search extends Component { //검색창 Component
  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => { //복잡한 bind 하지않기위해 화살표 사용. 화살표 함수
    e.preventDefault();
    this.props.onSaveData(this.state); //저장? 에러뜸
    this.setState({});
  }
  render(){
  return(
    <Form inline onSubmit={this.handleSubmit}>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" onSubmit={this.handleChange}/>
    <Button style = {bgc} variant="outline-success" type = "done"><SearchIcon></SearchIcon></Button>
  </Form>
    );
  }
}

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
      <AppBar style = {topbg} position="static">
        <Toolbar>
          <Box variant="h6" className={classes.title}>
              <Navbar><NavLink className = {classes.font} to = "/HomeApp"><Button color="inherit">devIL</Button></NavLink></Navbar>
          </Box>
        
          <Box variant = "h6" className = {classes.menu}>
              <NavLink className = {classes.font} to ="/about"><Button color="inherit">About</Button></NavLink>
              <NavLink className = {classes.font}to ="/ask"><Button color="inherit">질문게시판</Button></NavLink>
              <NavLink className = {classes.font}to ="/discuss"><Button color="inherit">토론게시판</Button></NavLink>
              <NavLink className = {classes.font}to ="/hotissue"><Button color="inherit">핫게</Button></NavLink>
          </Box>
       
          <Button className = {classes.font} color="secondary.light">Sign In</Button>
          <Button className = {classes.font} color="secondary.light">Login</Button>
          <Search></Search>
        </Toolbar>
      </AppBar>

      <Switch style = {margin}>
          <Route exact path ="/HomeApp" component = {Home} />
          <Route path="/about" component={About} />
          <Route path="/ask" component={AskBoard} />
          <Route path="/discuss" component={DiscussBoard} />
          <Route path="/hotissue" component={HotIssueBoard} />
          <Route path="/edit" component={EditBoard} />
      </Switch>
 
    </div>
    </Router>
    </div>
    )
} //index.js에서 여러개 import해서 못쓰는가...
  //component = {App} 하면 왜안될까...
export default HomeApp;

