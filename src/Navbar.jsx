import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import DarkLogo from "./assets/pictures/NavBar/DarkLogo.jpg";

const Navbar = () => {
  return (
    <nav className={s.whole_Nav}>
      <div className={s.left_section}>
        <Link to="./">
          <img src={DarkLogo} alt="site logo" className={s.img}></img>
        </Link>
      </div>
      <div className={s.right_section}>
        <Link to="/" className={s.linkHeader}>
          <p className={s.link}>Home</p>
        </Link>
        <Link to="/register" className={s.linkHeader}>
          <p className={s.link}>Register</p>
        </Link>
        <Link to="/signin" className={s.linkHeader}>
          <p className={s.link}>Sign-in</p>
        </Link>
        <Link to="/nav" className={s.linkHeader}>
          <p className={s.link}>Navbar</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
