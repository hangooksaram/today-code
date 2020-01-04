import React, {Component} from 'react';
import Subject from "./components/Subject";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
//Link -> a href 태그와 같다고 보면됨
//Router는 Link와 Route를 묶어준다고 보면 됨

import Home from "./Home";
import About from "./About";
import Edit from "./Edit";

import './App.css';

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
  <form onSubmit={this.handleSubmit}>
              <input placeholder="무엇을 검색하실" name="brdtitle" onChange={this.handleChange}/>
              <button type="done">검색</button>
            </form>
    );
  }
}

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          title : "송현상 프로젝트"/*, subtitle : "webwebweb"*/
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
      <Subject title = {this.state.title}>
      </Subject>
      <Search></Search>
      </div>
      <Router>
      <div className = "tt">
        <Link to="/">
          <div className = "font">Home</div>
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/edit">
          글쓰기
        </Link>
      </div>
      <hr />
      <main> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/edit" component={Edit} />
        </Switch>
      </main>
    </Router>
    </div>
    );
  }
} //index.js에서 여러개 import해서 못쓰는가...
  //component = {App} 하면 왜안될까...
export default App;

