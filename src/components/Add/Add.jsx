import React from "react";
import style from "./Add.module.css";
import x from "../../assets/images/Users/x.svg";

const Add = () => {
  return (
    <div>
      <div className={style.elave}>
        <div className={style.yanashiadd}>
          <h2>Sistem əlavə et</h2>
          <div className={style.cercive}>
            <img src={x} alt="" />
          </div>
        </div>
        <div className={style.formcreate}>
          <form className={style.form1} action="">
            <label className={style.label1} htmlFor="">
              <p className={style.sistem}> Sistem</p>
              <input
                className={style.input1}
                type="text"
                placeholder="Sistemin adı"
              />
            </label>
          </form>
          <form className={style.form1} action="">
            <label className={style.label1} htmlFor="">
              <p className={style.sistem}> URL</p>
              <input className={style.input1} type="text" placeholder="URL" />
            </label>
          </form>
          <br />
          <button className={style.btnlast}>Əlavə et</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
