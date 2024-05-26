import { useEffect, useState } from "react";
import s from "./News.module.css";
import { Link } from "react-router-dom";

const News = () => {
  // const [randomNumber, setRandomNumber] = useState(
  //   Math.floor(Math.random() * 31)
  // );

  // eslint-disable-next-line no-unused-vars
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const forexResponse = await fetch(
          "http://localhost:3000/finnhub-data?category=forex"
        );
        if (!forexResponse.ok) {
          throw new Error("Failed to fetch forex news");
        }
        const forexData = await forexResponse.json();

        const businessResponse = await fetch(
          "http://localhost:3000/finnhub-data?category=business"
        );
        if (!businessResponse.ok) {
          throw new Error("Failed to fetch business news");
        }
        const businessData = await businessResponse.json();

        // Combine general and business news
        const combinedNews = [...forexData, ...businessData];
        setNews(combinedNews);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!news) {
    return null;
  }

  return (
    <>
      <h1>Financial News Across The Globe</h1>
      <div className={s.container}>
        <section className={s.wrapper}>
          {news
            .filter((item) => item.image) // Filter out items where image does not exist
            .slice(0, 20)
            .map((item) => (
              <div key={item.id} className={s.news_container}>
                <Link to={item.url} target="blank">
                  {item.image && (
                    <img
                      src={item.image}
                      className={s.news_image}
                      alt={`news_${item.id}`}
                    />
                  )}
                  <p className={s.news_title}>{item.headline}</p>
                  <p className={s.news_category}>Category: {item.category}</p>
                </Link>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default News;
