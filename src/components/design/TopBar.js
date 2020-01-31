import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {FormControl, Form} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {NavLink} from "react-router-dom";
import Home from "../pages/Home";

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
      <Button variant="outline-success" type = "done">Search</Button>
    </Form>
      );
    }
  }


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const TopBar = ({ history}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Router>
          <Typography variant="h6" className={classes.title}>
          <button className="btn1" onClick={() => { history.push('/') }}> devIL </button>
          </Typography>
          <Switch>
          </Switch>
          </Router> 
          <Search></Search>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default TopBar;