import { atom } from "recoil";

export interface LibraryState {
  name: string;
  used: number | null;
}

export interface TechState {
  lang: string;
  library: LibraryState[];
}

const defaultState: TechState[] = [
  {
    lang: "javascript",
    library: [
      { name: "React", used: null },
      { name: "Vue", used: null },
    ],
  },
];

const techState = atom({
  key: "techState",
  default: defaultState,
});

export default techState;
