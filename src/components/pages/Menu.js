import React,{Component} from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import AppMenu from '../design/AppMenu'
import Recent from "./Recent"
import Like from "./Like"
import Home from "./Home"
import MyPage from "./MyPage"
import {Router, NavLink } from "react-router-dom"
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar,FormControl, NavItem, Col,  Form, FormGroup, FormText} from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Edit from '../pages/Edit'
const topbg = {
  background: '#FFAFBD',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #ffc3a0, #FFAFBD)',  /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #ffc3a0, #FFAFBD)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display : 'flex',
  boxShadow : 'none',
  padding : '7px'
}

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
    e.preventDefault()
    this.props.onSaveData(this.state) //저장? 에러뜸
    this.setState({})
  }

  render(){
  return(
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onSubmit={this.handleChange}/>
        <Button style = {bgc} variant="outline-success" type = "done"><SearchIcon></SearchIcon></Button>
      </Form>
    )
  }
}

const Menu = () => {
  const classes = useStyles()

  return (
    <div>
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
            <NavLink to = '/Edit'><Button className = {classes.font} color="secondary.light">Edit</Button></NavLink>
            <Button className = {classes.font} color="secondary.light">Sign In</Button>
            <Button className = {classes.font} color="secondary.light">Login</Button>
          <Search></Search>
        </Toolbar>
      </AppBar>
  </div>
      <div className={clsx('Menu', classes.root)}>
        <CssBaseline />
        <Grid container>
          <Grid item xs = {2}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <AppMenu />
        </Drawer>
        </Grid>

        <Grid item xs = {10}>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route path = "/Recent" component = {Recent} />
              <Route path="/Likes" component={Like} />
              <Route path="/MyPage" component={MyPage}/>
              <Route path="/Edit" component={Edit}/>
            </Switch>
          </Container>
        </main>
        </Grid>
        </Grid>
      </div>
    </BrowserRouter>
    </div>
  )
}

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(47),
    background: '#FFFFFF',
    color: '#000',
  },
  content: {
    flexGrow: 1,
    height: '88vh',
    overflow: 'auto',
    backgroundColor : '#FFFFFF'
  },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingLeft : theme.spacing(16),
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
