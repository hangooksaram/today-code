import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Main from "./main/Main";
import SideBar from "./main/SideBar";

const App = () => {
  return (
    <RecoilRoot>
      <SideBar />
      <Main />
    </RecoilRoot>
  );
};

export default App;
