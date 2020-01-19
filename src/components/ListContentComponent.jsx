import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class ListContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boards: [],
            message: null
        }
        this.deleteContent = this.deleteContent.bind(this);
        this.editContent = this.editContent.bind(this);
        this.reloadContentList = this.reloadContentList.bind(this);
    }

    componentDidMount() {
        this.reloadContentList();
    }

    reloadContentList() {
        ApiService.fetchboards()
            .then((res) => {
                this.setState({boards: res.data.result})
            });
    }

    deleteContent(boardId) {
        ApiService.deleteContent(boardId)
           .then(res => {
               this.setState({message : 'board deleted successfully.'});
               this.setState({boards: this.state.boards.filter(board => board.id !== boardId)});
           })

    }

    editContent(id) {
        window.localStorage.setItem("boardId", id);
        this.props.history.push('/edit-board');
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.boards.map(
                        board =>
                                    <tr key={board.id}>
                                        <td>{board.title}</td>
                                        <td>{board.content}</td>                                    
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteContent(board.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editContent(board.id)}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListContentComponent;