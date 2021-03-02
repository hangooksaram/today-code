import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkmodeSelector } from "../store/darkmode/selectors/darkmodeSelector";
import { ListContainer, MainContainer } from "../style/container";
import "../style/global.css";
import DarkModeToggle from './../darkmode/DarkModeToggle';
import Input from "./Input";
import SideBar from './SideBar';
import CodeList from './CodeList';
import { sidebarState } from "../store/sidebar/atoms/sidebarState";
import {SideBarButton} from '../style/buttons';
import sidebarSelector from './../store/sidebar/selectors/sidebarSelector';
const Main = () => {  
  const isDark = useRecoilValue(darkmodeSelector);
  const isOpen = useRecoilValue(sidebarSelector);
  const [open, setOpen] = useRecoilState(sidebarState);  
  return (
    <div className={isDark === "Turn On" ? "dark" : "not-dark"}>
      <DarkModeToggle/>      
      <SideBarButton onClick={()=>setOpen(isOpen? false : true)}>{isOpen ? "닫기" : "열기"}</SideBarButton>
      <MainContainer>
        <SideBar/>
        <CodeList/>        
      </MainContainer>      
    </div>
  );
};

export default Main;
