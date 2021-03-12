import React from "react";
import { useRecoilState } from "recoil";
import { darkmodeState } from "../store/darkmode/atoms/darkmodeState";
import { DarkModeButton } from "../style/buttons";
import "../style/global.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkmodeState);
  return (
    <div className={"dark-mode-tab"}>
      <DarkModeButton
        onClick={() =>
          setDarkMode(darkMode === "Turn Off" ? "Turn On" : "Turn Off")
        }
      >
        다크모드 {darkMode === "Turn Off" ? "켜기" : "끄기"}
      </DarkModeButton>
    </div>
  );
};

export default DarkModeToggle;
