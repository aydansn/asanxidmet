import { createContext } from "react";
import right from "../../src/assets/images/Users/right.svg";
export const RollContext = createContext();
export const RollProvider = (props) => {
  console.log(props);
  const rolls = [
    {
      id: 1,
      name: "HR",
      icon: right,
      type: "news",
    },
    {
      id: 2,
      name: "NQ",
      icon: right,
      type: "news",
    },
    {
      id: 3,
      name: "HR",
      icon: right,
      type: "news",
    },
    {
      id: 4,
      name: "HR",
      icon: right,
      type: "news",
    },
    {
      id: 5,
      name: "HR",
      icon: right,
      type: "news",
    },
    {
      id: 6,
      name: "HR",
      icon: right,
      type: "news",
    },
  ];

  return (
    <RollContext.Provider value={{ rolls }}>
      {props.children}
    </RollContext.Provider>
  );
};
