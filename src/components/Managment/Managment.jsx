import React, { useContext, useEffect, useState } from "react";
import style from "./Managment.module.css";
import user from "../../assets/images/Users/Icon.svg";
import phone from "../../assets/images/Users/phone.png";
import form from "../../assets/images/Users/Form 3 - 24px.svg";
import exit from "../../assets/images/Users/exit.svg";
import { ManagmentContext } from "../../contexts/ManagmentContext";
import { Link, useSearchParams } from "react-router-dom";

const Managment = () => {
  const { lists } = useContext(ManagmentContext);
  console.log(lists);

  let [searchParams] = useSearchParams();
  let tip = searchParams.get("type");
  console.log(tip);

  const [allList, setAllList] = useState(lists);
  console.log(allList);

  useEffect(() => {
    const filterlenmishdatalar = lists.filter((data) => data.type === tip);
    setAllList(filterlenmishdatalar);
  }, [tip]);

  return (
    <div>
      <div className={style.allleft}>
        <div className={style.side}>
          <div className={style.sidebyside}>
            <img src={phone} alt="" />
            <p>2 faktorlu yoxlama</p>
            <img src={user} alt="" />
          </div>
          <div className={style.sidebyside}>
            <img src={form} alt="" />
            <p>Şifrə yenilə</p>
          </div>
          <div className={style.sidebyside}>
            <img src={exit} alt="" />
            <p>Çıxış </p>
          </div>
        </div>
      </div>

      <div className={style.allList}>
        <h2 className={style.lists}>Sistemlərin siyahısı</h2>
        <div className={style.allCategory}>
          {lists.map((major, idx) => (
            <div className={style.allCategory} key={idx}>
              <div className={style.first}>
                <div className={style.back}>
                  <img src={major.img} alt="" />
                </div>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/user?type=click"
                >
                  {major.title}
                </Link>
              </div>
            </div>
          ))}
          {/* <div className={style.first}>
            <div className={style.back}>
              <img src={dif} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
          <div className={style.first}>
            <div className={style.back}>
              <img src={lastuser} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
          <div className={style.first}>
            <div className={style.back}>
              <img src={format} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
          <div className={style.first}>
            <div className={style.back}>
              <img src={perfor} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div> */}
        </div>

        {/* <div className={style.allCategory}>
          <div className={style.first}>
            <div className={style.back}>
              <img src={tech} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
          <div className={style.first}>
            <div className={style.back}>
              <img src={layout} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
          <div className={style.first}>
            <div className={style.back}>
              <img src={arrow} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
          <div className={style.first}>
            <div className={style.back}>
              <img src={media} alt="" />
            </div>
            <p> Nəzarət və qiymətləndirmə sistemi </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Managment;
