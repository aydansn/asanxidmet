import React, { useContext, useEffect, useState } from "react";
import { RollContext } from "../../contexts/RollContext";
import { Link, useSearchParams } from "react-router-dom";
import style from "./Roll.module.css";
import difuser1 from "../../assets/images/Users/difuser1.svg";
import difuser2 from "../../assets/images/Users/difuser2.svg";
import difper from "../../assets/images/Users/difper.svg";
import pen from "../../assets/images/Users/pen.svg";
import rabbish from "../../assets/images/Users/rabbish.svg";
import plus from "../../assets/images/Users/plus.svg";

const Roll = () => {
  const { rolls } = useContext(RollContext);
  console.log(rolls);

  let [searchParams] = useSearchParams();
  let tip = searchParams.get("type");
  console.log(tip);

  const [allRoll, setAllRoll] = useState(rolls);
  console.log(allRoll);

  useEffect(() => {
    const filterlenmishroll = rolls.filter((data) => data.type === tip);
    setAllRoll(filterlenmishroll);
  }, [tip]);

  return (
    <div>
      <div>
        <div className={style.allOfBorder}>
          <div className={style.theree}>
            <div className={style.borderroll1}>
              <div className={style.left}>
                <img src={difper} alt="" />
              </div>
              <div className={style.right1}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`user?type=click`}
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
            <div className={style.borderroll}>
              <div className={style.left}>
                <img src={difuser2} alt="" />
              </div>
              <div className={style.right}>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={`/stuation`}
                >
                  Rollar
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={style.yanshi}>
              <div className={style.yanYana}>
                <div>
                  <h1>Sistemlərin siyahısı</h1>
                </div>
                <div>
                  <div className={style.uchluside}>
                    <button className={style.btn2}>
                      <img src={plus} alt="" />
                      <Link
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        Sistem əlavə et
                      </Link>
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
              <div className={style.allOfThem}>
                {rolls.map((yeni, idx) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    key={idx}
                    to="/roll?type=news"
                  >
                    <div className={style.end}>
                      <div className={style.border}>
                        <div style={{ color: "black" }}> {yeni.name}</div>
                        <div>
                          <img src={yeni.icon} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roll;
