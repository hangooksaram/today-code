import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles}  from '@material-ui/core/styles';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from '@material-ui/core/Divider';
import Avartar from '@material-ui/core/Divider';
import Heart from '@material-ui/icons/FavoriteBorder';
import HeartAdapted from '@material-ui/icons/Favorite';
import UserPost from '../pages/UserPost'
const userpost = [
    {
        name : '오현재',
        content : 'ddddddddddddddddddddddddddddddddddddddddddddddddddddd'
    },

    {
        name : '송인철',
        content : 'ssssssssssssssssssssssssssssssssssssssssssssss'
    },

    {
        name : '백재상',
        content : 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'
    }
]
const useStyles = makeStyles(muiBaseTheme => ({
      card:{
        borderColor: 'grey',
        marginTop : '5%'       
      },

      divider: {
        margin: `${muiBaseTheme.spacing.unit}px 0`
      },

      panel:{
        overflowWrap: "break-word", 
        width : "800px"  ,
        borderRadius : 0,
      },

      head : {
          paddingTop: '3%',
          textAlign : 'left',
          marginLeft : '5%'
      },

      content :{
          textAlign : 'left',
          marginLeft : '1.5%',
          fontSize : '19px'
      },
      
      bottom :{
          marginTop : '1%',
          textAlign : 'left',
          color : 'red',
          marginLeft : '4.9%',
          marginBottom : '2%'
        
      }
  }))
  

const PostForm = () => {
        const classes = useStyles()
        return(
        <div>
        </div>
        );
    }


export default PostForm;