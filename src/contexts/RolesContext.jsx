import { createContext } from "react";
export const RolesContext = createContext();
export const RolesProvider = (props) => {
  console.log(props, "roles props");
  const rules = [
    {
      id: 1,
      name: "HR",
      type: "sistem",
    },
    {
      id: 2,
      name: "ND",
      type: "sistem",
    },
    {
      id: 3,
      name: "MCenter",
      type: "sistem",
    },
    {
      id: 4,
      name: "Situasiya",
      type: "sistem",
    },
    {
      id: 5,
      name: "Situasiya",
      type: "sistem",
    },
    {
      id: 6,
      name: "Situasiya",
      type: "sistem",
    },
    {
      id: 7,
      name: "Situasiya",
      type: "sistem",
    },
    {
      id: 8,
      name: "HR manager",
      type: "rollar",
    },
    {
      id: 9,
      name: "HR specialist",
      type: "rollar",
    },
    {
      id: 10,
      name: "HR assistant",
      type: "rollar",
    },
    {
      id: 11,
      name: "HR analyst",
      type: "rollar",
    },
    {
      id: 12,
      name: "HR analyst",
      type: "rollar",
    },
    {
      id: 13,
      name: "HR analyst",
      type: "rollar",
    },
    {
      id: 14,
      name: "HR analyst",
      type: "rollar",
    },
  ];

  return (
    <RolesContext.Provider value={{ rules }}>
      {props.children}
    </RolesContext.Provider>
  );
};
