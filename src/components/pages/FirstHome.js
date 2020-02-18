
import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import '../../App.css'

const useStyle = makeStyles (them =>  ({
    backcolor :{ 
        background: '#FFAFBD', 
        background: '-webkit-linear-gradient(to right, #ffc3a0, #FFAFBD)', 
        background: 'linear-gradient(to right, #ffc3a0, #FFAFBD)',
        padding : '120px',
    },
    
    font : {
        marginLeft : '10%',
        color: 'black',
    },

    backcolor2 :{
    }
}
)
);
const FirstHome = () =>{
    const classes = useStyle()
    return(
        <div>
    <div className = {classes.backcolor}>
    <Grid spacing={2} container>
      <Grid xs={4} item>
            <div className = "firstfont">DEV'LL</div>
      </Grid>
      
      <Grid xs={8} item>
      <div className = "secondfont">for dev, by dev, of dev </div>
      </Grid>
    </Grid>
      </div>
    </div>
    )
}

export default FirstHome;


/*
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    height: "100%",
    width: "100%"
  },
  container: {
    height: "400px"
  },
  innerContainer: {
    height: "100%"
  },
  item: {
    flex: 1
  }
});

function FirstHome() {
  const classes = useStyles();
  return (
    <Grid spacing={4} container>
      <Grid xs={4} item>
        <Grid
          spacing={4}
          direction="column"
          className={classes.container}
          container
        >
          <Grid className={classes.item} item>
            <Box className={classes.box}>ddd</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={8} item>
        <Box className={classes.box}>ggg</Box>
      </Grid>
    </Grid>
  );
}

export default FirstHome
*/