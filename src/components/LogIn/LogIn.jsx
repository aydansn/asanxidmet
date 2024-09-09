import React, { useContext, useEffect, useState } from "react";
import style from "./LogIn.module.css";
import { LogInContext } from "../../contexts/LogInContext";
import { Link, useSearchParams } from "react-router-dom";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setError("Kullanıcı adı ve şifre alanları boş olamaz.");
    } else {
      setError("");
      console.log(username);
      console.log(password);
    }
  };
  console.log(props);
  const { enter } = useContext(LogInContext);
  console.log(enter);

  let [searchParams] = useSearchParams();
  const tip = searchParams.get("type");
  console.log(tip);

  const [allEnter, setAllEnter] = useState(enter);
  console.log(allEnter);

  useEffect(() => {
    const filterlenmishdata = enter.filter((data) => data.type === tip);
    setAllEnter(filterlenmishdata);
  }, [tip]);
  return (
    <div>
      <div className={style.managent}>
        <h3 className={style.managentName}>Managment</h3>
      </div>
      <div className={style.allLog}>
        {enter.map((girish, idx) => (
          <div key={idx} className={style.allLog}>
            <div className={style.leftLog}>
              <div className={style.user}>{girish.name}</div>
              <div className={style.fin}>{girish.fin}</div>
              <div>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={style.input}
                  type="text"
                  placeholder="Fin daxil edin"
                />
              </div>
              <div className={style.fin}>{girish.password}</div>
              <div>
                <input
                  className={style.input}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrəni daxil edin"
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div style={{ marginTop: "20px" }} className={style.forget}>
                {girish.forget}
              </div>
              <Link
                type="submit"
                to={"/system?type=button"}
                className={style.girish}
              >
                {girish.button}
              </Link>
            </div>

            <div className={style.rightLog}>
              <img className={style.logo} src={girish.img} alt="" />
            </div>
          </div>
        ))}
        {/* <div className={style.leftLog}>
          <h1 className={style.user}>İstifadəçi girişi</h1>
          <form className={style.form} action="">
            <label className={style.fin} htmlFor="">
              Fin
            </label>
            <input
              className={style.input}
              type="text"
              placeholder="Fin daxil edin "
            />
          </form>
          <form className={style.form} action="">
            <label className={style.fin} htmlFor="">
              Şifrə
            </label>
            <input
              className={style.input}
              type="text"
              placeholder="Şifrəni daxil edin "
            />
          </form>
          <p className={style.forget}>Şifrəni unutmusunuz?</p>
          <button className={style.girish}>Daxil ol</button>
        </div>
        <div className={style.rightLog}>
          <img className={style.logo} src={logo} alt="logo" />
        </div> */}
      </div>
    </div>
  );
};

export default LogIn;
