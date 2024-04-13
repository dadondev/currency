import { createContext } from "react";

const Filter = createContext({
  filter: "",
  setFilter: (a: string) => {},
});

export default Filter;
