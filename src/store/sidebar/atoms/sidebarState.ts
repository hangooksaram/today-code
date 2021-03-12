import { atom } from "recoil";

const defaultState: string = "default";

const sidebarState = atom({
  key: "sidebar",
  default: defaultState,
});

export { sidebarState };
