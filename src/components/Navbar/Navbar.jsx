import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import DarkLogo from "../../assets/pictures/NavBar/Trading_Black.jpeg";
// import LightLogo from "../../assets/pictures/NavBar/Royal_Trading.jpg";

const Navbar = () => {
  return (
    <nav className={s.whole_Nav}>
      <div className={s.left_section}>
        <Link to="/home">
          <img src={DarkLogo} alt="site logo" className={s.nav_img}></img>
        </Link>
      </div>
      <div className={s.right_section}>
        <Link to="/home" className={s.linkHeader}>
          <p className={s.link}>Home</p>
        </Link>
        <Link to="/register" className={s.linkHeader}>
          <p className={s.link}>Register</p>
        </Link>
        <Link to="/signin" className={s.linkHeader}>
          <p className={s.link}>Sign-in</p>
        </Link>
        <Link to="/nav" className={s.linkHeader}>
          <p className={s.link}>News</p>
        </Link>
        <Link to="/nav" className={s.linkHeader}>
          <p className={s.link}>Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
