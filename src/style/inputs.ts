import styled from "styled-components";

const MainInput = styled.textarea`
  width: 50%;
  height: 100%;
  text-decoration: none;
  background-color: ${(props) =>
    props.isDark === "Turn On" ? "rgb(54, 54, 54)" : "white"};
  color: ${(props) => (props.isDark === "Turn On" ? "white" : "black")};
`;

export default MainInput;
