import React, { useContext, useEffect, useState } from "react";
import style from "./Roles.module.css";
import { RolesContext } from "../../contexts/RolesContext";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import difper from "../../assets/images/Users/difper.svg";
import difuser1 from "../../assets/images/Users/difuser1.svg";
import difuser2 from "../../assets/images/Users/difuser2.svg";
import rabbish from "../../assets/images/Users/rabbish.svg";
import plus from "../../assets/images/Users/plus.svg";
import pen from "../../assets/images/Users/pen.svg";
import down from "../../assets/images/Users/down.svg";
import istifade from "../../assets/images/Users/istifade.svg";
import whiteuser from "../../assets/images/Users/whiteuser.svg";

const Roles = () => {
  const { rules } = useContext(RolesContext);
  console.log(rules);

  const [allSistemObj, setSistemObj] = useState();
  const [allRollObj, setAllRollObj] = useState();

  useEffect(() => {
    const filterleshmishsistemObj = rules.filter(
      (roll) => roll.type === "sistem"
    );
    setSistemObj(filterleshmishsistemObj);

    const filterleshmishrolObj = rules.filter(
      (rulls) => rulls.type === "rollar"
    );
    setAllRollObj(filterleshmishrolObj);
  }, []);
  console.log(allSistemObj);
  return (
    <div>
      <div>
        <div className={style.allOfBorder}>
          <div className={style.theree}>
            <div className={style.borderroll}>
              <div className={style.left}>
                <img src={istifade} alt="" />
              </div>
              <div className={style.right}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/user?type=click"
                >
                  Sistemlər
                </Link>
              </div>
            </div>
            <div className={style.borderroll}>
              <div className={style.left}>
                <img src={difuser1} alt="" />
              </div>
              <Link
                to={`/about?type=thing`}
                style={{ color: "black", textDecoration: "none" }}
                className={style.right}
              >
                İstifadəçilər
              </Link>
            </div>
            <div className={style.borderroll1}>
              <div className={style.left}>
                <img style={{ color: "white" }} src={whiteuser} alt="" />
              </div>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                className={style.right1}
                to={`/stuation`}
              >
                Rollar
              </Link>
            </div>
          </div>
        </div>
        <div className={style.yanshi}>
          <div className={style.yanYana}>
            <div></div>
            <div>
              <div className={style.uchluside}>
                <button className={style.btn2}>
                  <img src={plus} alt="" />
                  <p>Rol yarat</p>
                </button>
                <div className={style.btn3}>
                  <img src={pen} alt="" />
                </div>
                <div className={style.btn3}>
                  <img src={rabbish} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.sistemYan}>
            <div className={style.class}>
              <div className={style.sideBy}>
                <div>Sistemlər</div>
                <div>
                  <img src={down} alt="" />
                </div>
              </div>
              {allSistemObj &&
                allSistemObj.length > 0 &&
                allSistemObj.map((sayi, idx) => {
                  console.log(sayi);
                  return (
                    <div>
                      <Link
                        className={style.bu}
                        style={{ textDecoration: "none" }}
                        key={idx}
                        to="/rules?type=rolu"
                      >
                        <div className={style.YanashiDuv}>
                          <div
                            className={style.nameone}
                            style={{ color: "black" }}
                          >
                            {sayi.name}
                          </div>
                          {/* <div style={{ color: "black" }}>{sayi.name2}</div> */}
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>

            <div className={style.class}>
              <div className={style.sideBy}>
                <div>Rollar</div>
                <div>
                  <img src={down} alt="" />
                </div>
              </div>
              {allRollObj &&
                allRollObj.length > 0 &&
                allRollObj.map((sayi, idx) => {
                  return (
                    <div>
                      <Link
                        className={style.bu}
                        style={{ textDecoration: "none" }}
                        key={idx}
                        to="/rules?type=rolu"
                      >
                        <div className={style.YanashiDuv}>
                          <div
                            className={style.nameone}
                            style={{ color: "black" }}
                          >
                            {sayi.name}
                          </div>
                          {/* <div style={{ color: "black" }}>{sayi.name2}</div> */}
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
