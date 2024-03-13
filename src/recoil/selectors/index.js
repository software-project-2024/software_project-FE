import { exampleAtom } from "../atoms";
import { selector } from "recoil";

export const exampleSelector = selector({
  key: 'example', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(exampleAtom);

    return text.length;
  },
});