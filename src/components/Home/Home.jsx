import s from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "grey";
    document.body.style.padding = "0px";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.padding = "";
    };
  }, []);

  return (
    <section className={s.first_section}>
      <div className={s.left_side}>
        <ul className={s.list}>
          <li className={s.list_element}>
            <h3>lorem wdadwa wdoajwa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              at quam facilis esse possimus. Voluptas saepe at laudantium a,
              velit rerum optio consectetur illum esse, iste temporibus! Ut,
              soluta maiores.
            </p>
          </li>
          <li className={s.list_element}>
            <h3>dwadwadwa wdadwada dwaxas</h3>
          </li>
          <li className={s.list_element}>
            <h3> modadojsajds dojsaj saodaj</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
