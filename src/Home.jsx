// import style from "./Home.module.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "red";
    document.body.style.padding = "0px";

    // Cleanup the styles when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.padding = "";
      document.body.style.borderRadius = "";
    };
  }, []);

  return (
    <div>
      <h1>dmwoamdwa</h1>
    </div>
  );
};

export default Home;
