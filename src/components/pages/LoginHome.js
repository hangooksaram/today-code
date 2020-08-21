import React, {Component} from "react";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPaper from '../design/LoginPaper';
import BackGround from '../design/BackGround';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

const styles  = theme => ({
    hidden: {
        display: 'none'
    }
})

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            open:false
        }
    }
    handleClickOpen =() =>{
        this.setState({
            open: true
        });
    }
    
    handleClickClose = () =>{
        this.setState({
        firstname:'',
            lastname:'',
            email:'',
            password:'',
            open:false
        })
    }

    render(){
        const {classes} = this.props;
        return(
            <div>
            <Button variant = "contained" color = "primary" onClick = {this.handleClickOpen}>SignIn</Button>
            <Dialog open = {this.state.open} onClose = {this.handleClickClose}>
                <DialogTitle>Sign In</DialogTitle>
                <DialogContent>
                    <TextField type = "text" label = "First Name" name = "firstname" /*value = {this.state.lastname}*/ onChange = {this.handleValueChange}  /><br></br>
                    <TextField type = "text" label = "Last Name" name = "lasstname" /*value = {this.state.lastname}*/ onChange = {this.handleValueChange}/><br></br>
                    <TextField type = "text" label = "E-mail" name = "email" /*value = {this.state.email}*/ onChange = {this.handleValueChange}/><br></br>
                    <TextField type = "text" label = "Password" name = "password" /*value = {this.state.password}*/ onChange = {this.handleValueChange}/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color = "primary" onClick = {this.handleFormSubmit}>Confirm</Button>
                    <Button variant="contained" color = "primary" onClick = {this.handleClickClose}>Close</Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    }
}


const LoginHome = ({ history }) =>  {
    return(
        <div>
        {/*<img src = {Background} alt= "Background"></img>*/}
        <BackGround/>
        <LoginPaper>
        </LoginPaper>
            <div className = "rr">
                <Button variant = "contained"  onClick={() => { history.push('/Home') }}> 그냥 볼래유 ㅡㅜ</Button>

            </div>
        </div>
    );
}

export default LoginHome;