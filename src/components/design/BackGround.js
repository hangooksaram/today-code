import React from "react";
import { createGlobalStyle } from 'styled-components';
import '../../App.css';
import BG from "../../images/LoginHome.jpg";
const BackGround = createGlobalStyle `
body{
width:100%;
height:100vh;
display:flex;
background: url(https://image.freepik.com/free-photo/night-sky-with-stars-moon_93200-29.jpg);
background-size:cover;
align-items:center;
margin-left: 33%;
}
`



export default BackGround;