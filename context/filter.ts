import { createContext } from "react";

const Filter = createContext({
  filter: "",
  setFilter: (a: string) => {},
  setShow: (a: any) => {},
  show: false,
  setCurrency: (e: any) => {},
});

export default Filter;
