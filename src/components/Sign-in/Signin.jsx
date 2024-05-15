import { useEffect } from "react";
import s from "./Signin.module.css";
import greyImg from "../../assets/pictures/Signin/Currency.jpg";

const Signin = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${greyImg})`;
    document.body.style.backgroundSize = "cover";
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  return (
    <div className={s.login_box}>
      <form>
        <div className={s.user_box}>
          <input type="text" name="" required />
          <label>Username</label>
        </div>
        <div className={s.user_box}>
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <center>
          <a href="#">
            Login
            <span></span>
          </a>
        </center>
      </form>
    </div>
  );
};

export default Signin;
