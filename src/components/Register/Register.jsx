import { useEffect, useState } from "react";
import s from "./Register.module.css";
import greyImg from "../../assets/pictures/Register/grey.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [displayNone, setDisplayNone] = useState("");
  function changeState() {
    setDisplayNone(s.display_none);
  }
  useEffect(() => {
    document.body.style.backgroundImage = `url(${greyImg})`;
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className={s.flex}>
      <div className={displayNone}>
        <section className={s.form}>
          <p className={s.title}>Register</p>
          <p className={s.message} id={s.message_margin}>
            Sign up now and get full access to our app.
          </p>
          <div className={s.flex}>
            <label>
              <input className={s.input} type="text" placeholder="" required />
              <span>Firstname</span>
            </label>
            <label>
              <input className={s.input} type="text" placeholder="" required />
              <span>Lastname</span>
            </label>
          </div>
          <label>
            <input className={s.input} type="email" placeholder="" required />
            <span>Email</span>
          </label>
          <label>
            <input
              className={s.input}
              type="password"
              placeholder=""
              required
            />
            <span>Password</span>
          </label>
          <label>
            <input
              className={s.input}
              type="password"
              placeholder=""
              required
            />
            <span>Confirm password</span>
          </label>
          <button className={s.submit} onClick={changeState}>
            Next
          </button>
          <p className={s.signin}>
            Already have an account?
            <Link to="/signin">Sign-in</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
