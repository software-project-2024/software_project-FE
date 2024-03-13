import { atom } from "recoil";

export const exampleAtom = atom({
  key: 'example', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
