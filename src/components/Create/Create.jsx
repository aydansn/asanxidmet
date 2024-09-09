import React from "react";
import style from "./Create.module.css";
import x from "../../assets/images/Users/x.svg";

const Create = () => {
  return (
    <div>
      <div className={style.allOfDif}>
        <div className={style.mesafe}>
          <div className={style.yanashiadd}>
            <h2>Rol yarat</h2>
            <div className={style.cercive}>
              <img src={x} alt="" />
            </div>
          </div>

          <div>
            <div className={style.systeem}>
              <p className={style.sistems}>Sistem</p>
              <select className={style.option1} name="" id="" placeholder="">
                <option className={style.option2} value="">
                  {" "}
                  Sistemi seçin
                </option>
                <option className={style.option2} value="">
                  RU
                </option>
                <option className={style.option2} value="">
                  ENG
                </option>
              </select>
            </div>

            <div>
              <p className={style.sistems}>Rollar</p>
              <select className={style.option9} name="" id="" placeholder="">
                <option className={style.option3} value="">
                  {" "}
                  <div className={style.lefto}>Rolu daxil edin</div>
                  <input type="chechbox" name="" id="" />
                </option>
                <option className={style.option3} value="">
                  HR manager
                </option>
                <option className={style.option3} value="">
                  HR manager
                </option>
              </select>
            </div>

            <div className={style.let}>
              <p className={style.sistems}>İcazələr</p>
              <select className={style.option7} name="" id="" placeholder="">
                <option className={style.option3} value="">
                  {" "}
                  <div className={style.lefto}>Seçin</div>
                  <input type="chechbox" name="" id="" />
                </option>
                <option className={style.option3} value="">
                  List 1
                </option>
                <option className={style.option3} value="">
                  List 2
                </option>
                <option className={style.option3} value="">
                  List 3
                </option>
                <option className={style.option3} value="">
                  List 4
                </option>
              </select>
            </div>
          </div>

          <div className={style.savebtn}>
            <div className={style.save}>Yadda saxla</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
