import s from "./News.module.css";
import tester from "../../assets/pictures/HomePage/desktop.jpg";

const News = () => {
  return (
    <>
      <h1>Financial News Across The Globe</h1>
      <div className={s.container}>
        <section className={s.wrapper}>
          <div className={s.news_container}>
            <img src={tester} className={s.news_image} alt="news_1"></img>
            <p className={s.news_title}>dwiadj waiod waoidwidwa</p>
          </div>
          <div className={s.news_container}>
            <img src={tester} className={s.news_image} alt="news_2"></img>
            <p className={s.news_title}>dwiadj waiod waoidwidwa</p>
          </div>
          <div className={s.news_container}>
            <img src={tester} className={s.news_image} alt="news_3"></img>
            <p className={s.news_title}>dwiadj waiod waoidwidwa</p>
          </div>
          <div className={s.news_container}>
            <img src={tester} className={s.news_image} alt="news_4"></img>
            <p className={s.news_title}>dwiadj waiod waoidwidwa</p>
          </div>
          <div className={s.news_container}>
            <img src={tester} className={s.news_image} alt="news_5"></img>
            <p className={s.news_title}>dwiadj waiod waoidwidwa</p>
          </div>
          <div className={s.news_container}>
            <img src={tester} className={s.news_image} alt="news_6"></img>
            <p className={s.news_title}>dwiadj waiod waoidwidwa</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
