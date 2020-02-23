import React, {Component} from 'react'

class UserPost extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default UserPost