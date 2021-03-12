import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 90%;
  padding-top: 5%;
`;

const InputContainer = styled.div`
  display :flex;
  justify-content:center;
  width : 100%:
  height : 100%;
  align-items: center;  
`;

const ListContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export { MainContainer, ListContainer, HeaderContainer, InputContainer };
