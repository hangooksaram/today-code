import React, {Component} from 'react';
import Subject from "./components/Subject";
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
  render(){
    console.log(this.state.content);

    return (
    <header>
      <Subject title = {this.state.title}>
      </Subject>
      <Search></Search>
    </header>
    );

  }
} //index.js에서 여러개 import해서 못쓰는가...

export default App;

