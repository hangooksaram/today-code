import styled, { keyframes } from "styled-components";

const defaultAnime = keyframes`
    from {
        transform : translateX(-100%);
    }
    to { 
        transform : translateX(-100%);
    }
`;

const openAnime = (width) => keyframes`
    from {  
        transform : translateX(-100%);
    }
    to { 
        transform : translateX(0%);
    }
`;

const closeAnime = (width) => keyframes`
    from {
        transform : translateX(0%);
    }
    to { 
        transform : translateX(-100%);
    }
`;

const MySideBar = styled.div`
  position: absolute;
  z-index: 1;
  top: 10%;
  left: 0;
  width: 30%;
  height: 75%;
  background-color: black;
  background-color: ${(props) =>
    props.isDark === "Turn On" ? "white" : "black"};
  color: ${(props) => (props.isDark === "Turn On" ? "black" : "white")};
  animation: ${(props) => {
      switch (props.isOpen) {
        case "default":
          return defaultAnime;
        case "opened":
          return openAnime(props.width);
        case "closed":
          return closeAnime(props.width);
      }
    }}
    forwards 1s;
`;

export default MySideBar;
