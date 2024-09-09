import style from "./Navbars.module.css";
import set from "../../assets/images/Users/set.svg";
import key from "../../assets/images/Users/key.svg";
import user from "../../assets/images/Users/Icon.svg";

const Navbars = (props) => {
  console.log(props);
  return (
    <div>
      <div className={style.navbar}>
        <div className={style.btnNav}>
          <div className={style.leftNav}>
            <div className={style.managent}> {props.title}</div>
          </div>
          <div className={style.rightNav}>
            <div className={style.icon1}>
              <img src={set} alt="" />
            </div>
            <div className={style.icon1}>
              <img src={key} alt="" />
            </div>
            <div className={style.icon1}>
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
