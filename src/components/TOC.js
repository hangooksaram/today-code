import React, {Component} from 'react';

class TOC extends Component{
    render(){
        console.log(this.props);
        var list = [];
        var data = this.props.data;
        var i = 0;
        /*while (i<data.length){
            list.push(<li key = {data[i].id}><a href = {"/content/" + data[i].id}>{data[i].title}</a></li>)
            i = i+1;
        }*/
      return(
        <div>
          {list}
        </div>
      );
    }
  }
  
  export default TOC;