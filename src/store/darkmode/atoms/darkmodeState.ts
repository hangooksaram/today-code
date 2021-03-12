import { atom } from "recoil";

const defaultState: string = "Turn Off";

const darkmodeState = atom({
  key: "darkmodeState",
  default: defaultState,
});

export { darkmodeState };
