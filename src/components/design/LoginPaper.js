import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Background from '../../images/LoginHome.jpg'; 
import Box from '@material-ui/core/Box';
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
    height : 200,
    boxShadow : 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  box: {
      boxShadow : 10,
      borderRadius: 5,
      width : 300,
      height : 30,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 100, .3)',
      marginBottom: 130,
      backgroundColor : 'white'
  }
});

class GridTutorial1 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
            <Box className = {classes.box}>LOG IN</Box>

        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(GridTutorial1);