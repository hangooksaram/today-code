import React, {Component} from "react"
import Card from '@material-ui/core/Card'
const user = [
    {
        name : 'o',
        content : 'd'
    },

    {
        name : 's',
        content : 'v'
    },

    {
        name : 'f',
        content : 'g'
    },
    

]


class Like extends Component {
    render(){
        let cardList = []
        Object.keys(user).forEach((name) => {
            let u = user[name]
            cardList.push(
               <Card>
                   {u.name}<br></br>
                   {u.content}
               </Card>
            )
        })
        return(
            <div>
            <h1>Like</h1>
           {cardList}
            </div>
        );
    }
}

export default Like;