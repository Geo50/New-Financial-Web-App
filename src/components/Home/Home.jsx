import s from "./Home.module.css";
import { useEffect } from "react";
import forex from "../../assets/pictures/HomePage/desktop.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "whtie";
    document.body.style.padding = "0px";
    document.body.style.fontFamily = "Roboto Condensed";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.padding = "";
      document.body.style.fontFamily = "";
    };
  }, []);

  return (
    <>
      <section className={s.first_section}>
        <div className={s.left_side}>
          <ul className={s.list}>
            <li className={s.list_element}>
              <Link to="/register" className={s.home_link}>
                Get Started
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore at quam facilis esse possimus. Voluptas saepe at
                laudantium a, velit rerum optio consectetur illum esse, iste
                temporibus! Ut, soluta maiores.
              </p>
            </li>
            <li className={s.list_element}>
              <Link to="/signin" className={s.home_link}>
                Login To Your Account
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore at quam facilis esse possimus. Voluptas saepe at
                laudantium a, velit rerum optio consectetur illum esse, iste
                temporibus! Ut, soluta maiores.
              </p>
            </li>
            <li className={s.list_element}>
              <Link to="/register" className={s.home_link}>
                Check Out The News
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore at quam facilis esse possimus. Voluptas saepe at
                laudantium a, velit rerum optio consectetur illum esse, iste
                temporibus! Ut, soluta maiores.
              </p>
            </li>
          </ul>
        </div>
        <div className={s.right_side}>
          <img src={forex} alt="trading_picture" className={s.home_img}></img>
        </div>
        {/* I CAN INCLUDE OTHER SECTIONS THEN MAKE SCROLL CLIP/JUMP TO SECTIONS, LIKE ROLLS ROYCE SITE */}
      </section>
    </>
  );
};

export default Home;
