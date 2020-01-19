import React, {Component} from 'react';
import Subject from "./components/Subject";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavLink} from "react-router-dom";
import './App.css';
import jaguar from "./images/jaguar.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Nav,Navbar,FormControl, NavItem, Col,  Form, FormGroup, Label, Input, FormText} from 'react-bootstrap';
//Link -> a href 태그와 같다고 보면됨
//Router는 Link와 Route를 묶어준다고 보면 됨

import Home from "./Home";
import About from "./About";
import AskBoard from "./pages/AskBoard";
import DiscussBoard from "./pages/DiscussBoard";
import HotIssueBoard from "./pages/HotIssueBoard";
import Edit from "./Edit";

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
/*
<Subject title = {this.state.title}>
      </Subject>
*/
class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          title : "재결합"/*, subtitle : "webwebweb"*/
          /*content:[
            {id:1, title : "222", content : "euaaaaaa"},
            {id:2, title : "aaa23", content : "aaaauuuuu"},
            {id:3, title : "66666", content : "uuuuuuuuuuuuuuu"}
          ]*/
        }
    }
    componentDidMount() {
      console.log(this.context);
   }
  render(){
    console.log(this.state.content);
    return (
    <div>
      <div className = "tt">
      
      </div>
      <Router> 
      <Navbar bg = "light" expand="lg">
      <NavLink to="/" className="navbar-brand" color = "dark">
          <img src = {jaguar} alt= "Jaguar"></img> 재결합
      </NavLink>
        &nbsp;
        <NavLink to ="/about">About</NavLink>
        &nbsp;
        <NavLink to ="/ask">질문게시판</NavLink>
        &nbsp;
        <NavLink to ="/discuss">토론게시판</NavLink>
        &nbsp;
        <NavLink to ="/hotissue">핫게</NavLink>
        &nbsp;&nbsp;&nbsp;<Search></Search>
      </Navbar>
      <br></br>

      <main> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/ask" component={AskBoard} />
          <Route path="/discuss" component={DiscussBoard} />
          <Route path="/hotissue" component={HotIssueBoard} />
        </Switch>
      </main>
    </Router>
    </div>
    )
  }
} //index.js에서 여러개 import해서 못쓰는가...
  //component = {App} 하면 왜안될까...
export default App;

