import { atom } from "recoil";

export interface CodeState {
  code: string;
  type: string;
}

const defaultState: CodeState = {
  code: "",
  type: "",
};

const inputState = atom({
  key: "inputState",
  default: defaultState,
});

const codeState = atom<CodeState[]>({
  key: "codeState",
  default: [defaultState],
});

export { codeState, inputState };
