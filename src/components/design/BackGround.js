import React from "react";
import { createGlobalStyle } from 'styled-components';
import '../../App.css';
import BG from "../../images/LoginHome.jpg";
const BackGround = createGlobalStyle `
body{
width:900px;
height:650px;
display:flex;
background: url(https://static.etoffe.com/inter/140950/papier-peint-bohemian-texture-mulberry.jpg);
background-size:cover;
align-items:center;
margin-left: 18%;
}
`



export default BackGround;