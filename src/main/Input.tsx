import React from "react";
import MainInput from "./../style/inputs";
import { InputContainer } from "./../style/container";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { codeState, inputState } from "../store/codes/atoms/codeState";
import { darkmodeState } from "../store/darkmode/atoms/darkmodeState";
import { CodeState } from "./../store/codes/atoms/codeState";

const Input = () => {
  const darkMode = useRecoilValue(darkmodeState);
  const setCodes = useSetRecoilState(codeState);
  const [input, setInput] = useRecoilState(inputState);
  const { code, type } = input;
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput({ ...input, type: e.target.value });
  };
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, code: e.target.value });
  };

  const handleClick = () => {
    setCodes((codes) => [...codes, input]);
    setInput({ code: "", type: "" });
  };

  return (
    <InputContainer style={{ height: "25%" }}>
      <select
        onChange={handleTypeChange}
        value={type}
        name="types"
        id="type-select"
      >
        <option value="node.js">node.js</option>
        <option value="React.js">React.js</option>
        <option value="Java">Java</option>
      </select>
      <MainInput value={code} onChange={handleCodeChange} isDark={darkMode} />
      <button onClick={handleClick} type="submit">
        확인
      </button>
    </InputContainer>
  );
};

export default Input;
