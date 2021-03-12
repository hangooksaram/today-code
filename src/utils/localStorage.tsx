import { CodeState } from "./../store/codes/atoms/codeState";

const getItem = (key: string) => {
  const data: string | null = localStorage.getItem(key);
  return key === null ? null : JSON.parse(data as string);
};

const setItem = (key: string, item: CodeState[]) => {
  const data = JSON.stringify(item);
  localStorage.setItem(key, data);
};

export { getItem, setItem };
