import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { Link, useSearchParams } from "react-router-dom";
import style from "./Istifadeci.module.css";
import difuser1 from "../../assets/images/Users/difuser1.svg";
import difuser2 from "../../assets/images/Users/difuser2.svg";
import difper from "../../assets/images/Users/difper.svg";
import rabbish from "../../assets/images/Users/rabbish.svg";
import plus from "../../assets/images/Users/plus.svg";
import search from "../../assets/images/Users/search.svg";
import filter from "../../assets/images/Users/filter.svg";
import istifade from "../../assets/images/Users/istifade.svg";
import whitee from "../../assets/images/Users/whitee.svg";

const Istifadeci = () => {
  const { fixsed } = useContext(UsersContext);
  console.log(fixsed);

  let [searchParams] = useSearchParams();
  let tip = searchParams.get("type");
  console.log(tip);

  const [allUsers, setAllUsers] = useState(fixsed);
  console.log(allUsers);

  useEffect(() => {
    const filterlenmishuser = fixsed.filter((data) => data.type === tip);
    setAllUsers(filterlenmishuser);
  }, [tip]);
  return (
    <div>
      <div>
        <div className={style.allOfBorder}>
          <div className={style.theree}>
            <div className={style.borderroll}>
              <div className={style.left}>
                <img src={istifade} alt="" />
              </div>
              <div className={style.right1}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/user?type=click"
                >
                  Sistemlər
                </Link>
              </div>
            </div>
            <div className={style.borderroll1}>
              <div className={style.left}>
                <img style={{ color: "white" }} src={whitee} alt="" />
              </div>
              <Link
                to={`/about?type=thing`}
                style={{ color: "white", textDecoration: "none" }}
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
                  className={style.right}
                  to={`/stuation`}
                >
                  Rollar
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.yanshi}>
          <div className={style.yanYana}>
            <div className={style.butunistft}>
              <div className={style.butun}> Bütün istifadəçilər</div>
              <div className={style.butun}> Aktiv istifadəçilər </div>
              <div className={style.butun}> Deaktiv istifadəçilər </div>
              <div className={style.butun}> Sosial istifadəçilər </div>
            </div>

            <div>
              <div className={style.uchluside}>
                <button className={style.btn3}>
                  <img src={search} alt="" />
                </button>
                <div className={style.btn3}>
                  <img src={filter} alt="" />
                </div>
                <div className={style.btn3}>
                  <Link to="/roll?type=news">
                    {" "}
                    <img src={plus} alt="" />
                  </Link>
                </div>
                <div className={style.btn3}>
                  <img src={rabbish} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.id}>
              <div className={style.vezifeler}>
                <strong> ID</strong>
              </div>
              <div className={style.vezifeler}>
                <strong> Seriya</strong>
              </div>
              <div className={style.vezifeler}>
                <strong> Ad, soyad, ata adı </strong>
              </div>
              <div className={style.vezifeler}>
                <strong> Rollar</strong>
              </div>
              <div className={style.vezifeler}>
                <strong style={{ paddingLeft: "20px" }}> Şöbə</strong>
              </div>
              <div className={style.vezifeler}>
                <strong style={{ paddingLeft: "20px" }}> Vəzifə</strong>
              </div>
              <div className={style.vezifeler}>
                <strong style={{ paddingLeft: "20px" }}> Status</strong>
              </div>
            </div>
          </div>
          <div className={style.allOfThem}>
            {fixsed.map((fix, idx) => (
              <div to={idx}>
                <div>
                  <div className={style.allDatas}>
                    <div className={style.num}>
                      <input
                        className={style.lastnput}
                        type="checkbox"
                        src={fix.img2}
                        alt=""
                      />
                    </div>
                    <div className={style.num}>{fix.number}</div>
                    <div className={style.num}>{fix.seria}</div>
                    <div className={style.num}>{fix.name}</div>
                    <div className={style.num}>{fix.rollar}</div>
                    <div className={style.num}>{fix.sobe}</div>
                    <div className={style.num}>{fix.vezife}</div>
                    <div className={style.num2}>{fix.buttons}</div>
                    <div className={style.num}>
                      <img src={fix.img1} alt="" />
                    </div>

                    <div className={style.num}>
                      <img src={fix.img3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Istifadeci;
