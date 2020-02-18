import React,{Component} from 'react';
import clsx from 'clsx';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppMenu from '../design/AppMenu';
import Recent from "./Recent";
import Like from "./Like";
import Home from "./Home"
import { NavLink } from "react-router-dom";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar,FormControl, NavItem, Col,  Form, FormGroup, FormText} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import fade from '@material-ui/core/styles/colorManipulator';
import Box from '@material-ui/core/Box';


const topbg = {
  background : '#FFFFFF',
  display : 'flex',
  boxShadow : 'none',
  padding : '7px'
};

const bgc = {
  backgroundColor : 'white'
}

const margin = {
  marginRight : 10
}


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

const Menu = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <AppBar style = {topbg} position="static">
        <Toolbar>
          <Box variant="h6" className={classes.title}>
              <Navbar>
                <NavLink className = {classes.font} to = "/Home">
                  <Button color="inherit">devIL</Button>
                  </NavLink>
                </Navbar>
          </Box>
            <Button className = {classes.font} color="secondary.light">Sign In</Button>
            <Button className = {classes.font} color="secondary.light">Login</Button>
          <Search></Search>
        </Toolbar>
      </AppBar>
  </div>
    
      <div className={clsx('Menu', classes.root)}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route path = "/Recent" component = {Recent} />
              <Route path="/Likes" component={Like} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#FFFFFF',
    color: '#000',
  },
  content: {
    flexGrow: 1,
    height: '90vh',
    overflow: 'auto',
    backgroundColor : '#FFFEFB'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    marginRight : 190
  },
  font: {
    color:'black'
  },
  bgc: {
    backgroundColor : 'white'
  }
}))

export default Menu
