import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkmodeState } from "../store/darkmode/atoms/darkmodeState";
import { darkmodeSelector } from "../store/darkmode/selectors/darkmodeSelector";
import { DarkModeButton } from "../style/buttons";
import "../style/global.css";

const DarkModeToggle = () => {
  const [darkmode, setDarkMode] = useRecoilState(darkmodeState);
  const isDark = useRecoilValue(darkmodeSelector);
  return (    
      <div className={"dark-mode-tab"}>
        <DarkModeButton
          onClick={() =>
            setDarkMode(isDark === "Turn Off" ? "Turn On" : "Turn Off")
          }
        >
          다크모드 {isDark === "Turn Off" ? '켜기' : '끄기' }
        </DarkModeButton>
      </div>    
  );
};

export default DarkModeToggle;
