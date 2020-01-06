import React, {Component} from 'react';
import './App.css';

class Write extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = (evt) => {
    alert('내용 : ' + this.state.content + "이대로 작성하시겠습니까????????");
    evt.preventDefault();
  }
  
  render () {
    return (
      <div className ="tt">
      <form onSubmit = {this.handleSubmit}>
      
        제목
        <textarea value = {this.state.title} name="title" onChange={this.handleChange} />
        <br></br>
        내용
        <textarea value = {this.state.content} style = {{height : '100px'}} name="content" onChange={this.handleChange} />
        <br></br>
        <input type = "submit" value = "작성하기"/>
      </form>
      </div>
    );
  }
}
  


class Edit extends Component{
    render() {
      return(
        <div className = "tt">
          글 쓰기
          <Write></Write>
        </div>
      );
    }
  }

  export default Edit;