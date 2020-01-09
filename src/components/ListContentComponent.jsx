import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class ListContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
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
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteContent(userId) {
        ApiService.deleteContent(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    editContent(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
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
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.title}</td>
                                        <td>{user.content}</td>                                    
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteContent(user.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editContent(user.id)}> Edit</button>
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