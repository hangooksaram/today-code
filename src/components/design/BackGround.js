import React from "react";
import { createGlobalStyle } from 'styled-components';
import '../../App.css';
import BG from "../../images/LoginHome.jpg";
const BackGround = createGlobalStyle `
body{
width:100%;
height:100vh;
display:flex;
background: url(https://p4.wallpaperbetter.com/wallpaper/628/289/160/transport-rails-san-francisco-tram-wallpaper-preview.jpg);
background-size:cover;
align-items:center;
margin-left: 33%;
}
`



export default BackGround;