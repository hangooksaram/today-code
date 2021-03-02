import React from "react";
import MainInput from "./../style/inputs";
import { useRecoilValue } from "recoil";
import { darkmodeSelector } from "../store/darkmode/selectors/darkmodeSelector";
import { codeState, inputState } from "../store/codes/atoms/codeState";
import { useRecoilState } from "recoil";

const Input = () => {
  const isDark = useRecoilValue(darkmodeSelector);
  const [codes, setCodes] = useRecoilState(codeState);
  const [input, setInput] = useRecoilState(inputState);
  const { code, type } = input;
  const handleChange = (e) => {
    setInput({ ...input, code: e.target.value });
  };
  const handleSubmit = () =>{
    setCodes(codes => codes.concat(input));
  } 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <MainInput value={code} onChange={handleChange} isDark={isDark} />
        <input
          value={type}
          onChange={(e) => setInput({ ...input, type: e.target.value })}
        />
        <button type="submit">확인</button>
      </form>
    </>
  );
};

export default Input;
