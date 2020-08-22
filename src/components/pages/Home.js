import React, { Component } from "react";
import ContentList from './ContentList'
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ContentList />
            </div>
        );
    }
}

export default Home;