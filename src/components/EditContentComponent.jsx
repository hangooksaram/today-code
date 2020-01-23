import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class EditContentComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            content: '',
        }
        this.saveContent = this.saveContent.bind(this);
        this.loadContent = this.loadContent.bind(this);
    }

    componentDidMount() {
        this.loadContent();
    }

    loadContent() {
        ApiService.fetchboardById(window.localStorage.getItem("boardId"))
            .then((res) => {
                let board = res.data.result;
                this.setState({
                id: board.id,
                title: board.title,
                content: board.content
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveContent = (e) => {
        e.preventDefault();
        let board = {id: this.state.id, title: this.state.title, content: this.state.content};
        ApiService.editContent(board) //edit에서 설정한 board
            .then(response => {
                this.setState({message : 'board added successfully.'});
                this.props.history.push('/boards');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit board</h2>
                <form>
                    <div className="form-group">
                        <label>board Name:</label>
                        <input type="text" placeholder="id" name="id" className="form-control" readonly="true" defaultValue={this.state.id}/>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input placeholder="Title" name="title" className="form-control" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Content:</label>
                        <input placeholder="Content" name="content" className="form-control" value={this.state.content} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveContent}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditContentComponent;