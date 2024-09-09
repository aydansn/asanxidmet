import { createContext } from "react";
import logo from "../../src/assets/images/Users/Layer_1.png";
export const LogInContext = createContext();
export const LogInProvider = (props) => {
  console.log(props);
  const enter = [
    {
      img: logo,
      id: 1,
      name: "İstifadəçi girişi",
      fin: "Fin",
      input: "Fin daxil edin",
      password: "Şifrə",
      input2: "Şifrəni daxil edin",
      forget: "Şifrəni unutmusunuz?",
      button: "Daxil ol",
      type: "button",
    },
  ];
  return (
    <LogInContext.Provider value={{ enter }}>
      {props.children}
    </LogInContext.Provider>
  );
};
