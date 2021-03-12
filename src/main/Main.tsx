import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ListContainer,
  MainContainer,
  HeaderContainer,
} from "../style/container";
import "../style/global.css";
import DarkModeToggle from "../utils/DarkModeToggle";
import Input from "./Input";
import CodeList from "./CodeList";
import { sidebarState } from "../store/sidebar/atoms/sidebarState";
import { SideBarButton } from "../style/buttons";
import { darkmodeState } from "../store/darkmode/atoms/darkmodeState";

const Main = () => {
  const darkMode = useRecoilValue(darkmodeState);
  const [open, setOpen] = useRecoilState(sidebarState);
  useEffect(() => {
    setOpen("default");
  }, []);
  return (
    <div className={darkMode === "Turn On" ? "dark" : "not-dark"}>
      <HeaderContainer>
        <SideBarButton
          onClick={() => setOpen(open === "opened" ? "closed" : "opened")}
        >
          메뉴
        </SideBarButton>
        <DarkModeToggle />
      </HeaderContainer>
      <MainContainer>
        <Input />
        <CodeList />
      </MainContainer>
    </div>
  );
};

export default Main;
