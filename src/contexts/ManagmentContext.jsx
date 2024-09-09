import { createContext } from "react";
import tech from "../../src/assets/images/Users/Tech 7 - 24px.svg";
import media from "../../src/assets/images/Users/Media 35 - 24px.svg";
import lastuser from "../../src/assets/images/Users/lastuser.svg";
import format from "../../src/assets/images/Users/Format 39 - 24px.svg";

import perfor from "../../src/assets/images/Users/Performance 15 - 24px.svg";
import layout from "../../src/assets/images/Users/Layout 1 - 24px.svg";
import arrow from "../../src/assets/images/Users/Arrow Double 3 - 24px.svg";
import dif from "../../src/assets/images/Users/dif.svg";
export const ManagmentContext = createContext();
export const ManagmentProvider = (props) => {
  console.log(props);
  const lists = [
    {
      id: 1,
      img: dif,
      title: " Nəzarət və qiymətləndirmə sistemi",
      type: "click",
    },
    {
      id: 2,
      img: lastuser,
      title: " İnsan resurslarının idarəedilməsi sistemi",
      type: "click",
    },
    {
      id: 3,
      img: format,
      title: " Situasiya Mərkəzi üzrə Qeydiyyat Sistemi ",
      type: "click",
    },
    {
      id: 4,
      img: perfor,
      title: " 1 C",
      type: "click",
    },
    {
      id: 5,
      img: tech,
      title: " Tapşırıqların idarə olunması sistemi",
      type: "click",
    },
    {
      id: 6,
      img: layout,
      title: " Superset",
      type: "click",
    },
    {
      id: 7,
      img: arrow,
      title: "Giriş-çıxışın qeydiyyat sistemi",
      type: "click",
    },
    {
      id: 8,
      img: media,
      title: "Media Mərkəzi",
      type: "click",
    },
  ];
  return (
    <ManagmentContext.Provider value={{ lists }}>
      {props.children}
    </ManagmentContext.Provider>
  );
};
