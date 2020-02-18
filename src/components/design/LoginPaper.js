import React, { Component } from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import '../../App.css';

const styles = theme => ({
  root: {
    padding: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,
    width : 500,
    height : 390,
    boxShadow: '0 4px 9px 4px rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    border : 'none',
    margin: 'auto'
    
  },
  font : {
    color : 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  media: {
    backgroundColor : 'black',
    width : 1000,
    display : 'inline-block',
    paddingTop : '2%',
    marginBottom : '68%',
    marginLeft : '-3%',
    marginRight : '-3%',
    justifyContent: 'center',
  },

  content: {
    marginLeft : '-25%',
    marginTop : '67%'
  }
});

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
          <Button variant = "contained" onClick = {this.handleClickOpen}>SignIn</Button>
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

class LoginPaper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {/*<div className = {classes.root} >
          <Card cariant = "outlined" square className = {classes.header}>
          <h1>deVil</h1>
          <h3>
            갈 곳 잃은 개발자들을 위한 파라다이스...
          </h3>
          </Card>
    </div>*/}
    <Grid container spacing = {9} >
      <Grid item xs = {4} >
      <div className = "firstfont">Dev'll</div>
      <div className = "secondfont">구글링 ㅠㅠ {<br></br>}스택오버플로우 ㅠㅠ {<br></br>} 엥? 여긴뭐지? -></div>
      </Grid>

      <Grid item xs = {8}>
        <div className={classes.root}>
          <Card variant="outlined" square className={classes.paper}>
            <CardMedia className = {classes.media}><div className = {classes.font}><h1>LogIn</h1></div></CardMedia>
               {/*<Box variant="outlined" square className = {classes.box}>LOG IN</Box>*/}
               <CardContent className = {classes.content}><SignIn /></CardContent>
               
          </Card>
        </div>
        </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(LoginPaper);