import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
//ID, Title, Content

//edit과 유사
//Save 누르면 saveContent로 이동
class AddContentComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            content: '',
            message: null
        }
        this.saveContent = this.saveContent.bind(this);
    }
    saveContent = (e) => { //버튼누르면 여기로 이동
        e.preventDefault();
        let user = {id: this.state.id, title: this.state.title, content: this.state.content};
        ApiService.addContent(user) //add에서 설정한 user
                                    //글 작성하면                            
                                    //Axio 있는 ApiService의 addContent 함수로 넘어감
            .then(res => {
                this.setState({message : 'Content added successfully.'});
                this.props.history.push('/users'); //users url로 push
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
render(){
        return(
            <div>
                <form>
                    <label>User Name:</label>
                    <input type="text" placeholder="id" name="id" className="form-control" value={this.state.id} onChange={this.onChange}/>
                    <br></br>
                    <label>Title:</label>
                    <input type="text" placeholder="title" name="title" className="form-control" value={this.state.title} onChange={this.onChange}/>
                    <br></br>
                    <label>Content:</label>
                    <textarea placeholder="content" name="content" className="form-control" value={this.state.content} onChange={this.onChange}/>
               
                <button className="btn2" onClick={this.saveContent}>Save</button>
            </form>
    </div>
        );

    }
}

    export default AddContentComponent