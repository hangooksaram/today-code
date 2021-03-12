import React, { useEffect, useState } from "react";
import MySideBar from "./../style/sidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { codeState } from "../store/codes/atoms/codeState";
import { darkmodeState } from "../store/darkmode/atoms/darkmodeState";
import { sidebarState } from "../store/sidebar/atoms/sidebarState";
import MenuItem from "./MenuItem";
import techState from "../store/tech/atoms/techState";

const SideBar = () => {
  const darkMode = useRecoilValue(darkmodeState);
  const [open, setOpen] = useRecoilState(sidebarState);
  const codes = useRecoilValue(codeState);
  const techs = useRecoilValue(techState);
  const sidebar: Element | null = document.getElementById("side-bar");
  const [width, setWidth] = useState<number | undefined>(0);
  useEffect(() => {
    setOpen("default");
  }, []);
  useEffect(() => {
    setWidth(sidebar?.getBoundingClientRect().x);
  }, [open !== "default"]);
  console.log(
    window.getComputedStyle(document.querySelector("div") as Element).all
  );
  return (
    <MySideBar id="side-bar" isDark={darkMode} isOpen={open} width={width}>
      {techs?.map((c) => {
        return <MenuItem menu={c.lang} />;
      })}
    </MySideBar>
  );
};

export default SideBar;
