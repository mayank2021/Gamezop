"use client";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import NewsCard from "../components/NewsCard/NewsCard";
import Heading from "../components/Heading/Heading";
import styles from "./page.module.css";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";

const News = () => {
  const [news, setNews] = useState<any>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState({ tit: "", desc: "" });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setNews(data);
    }
    fetchData();
  }, []);

  if (news?.length === 0) return <Loader />;

  return (
    <Layout>
      {showModal && (
        <Modal
          title={data.tit}
          description={data.desc}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <Heading heading="News" />
      <div className={styles.wrapper}>
        {news &&
          news.length &&
          news.map((ele: any) => (
            <NewsCard
              key={ele?.id}
              title={ele?.title}
              description={ele?.body}
              data={data}
              setData={setData}
              setShowModal={setShowModal}
            />
          ))}
      </div>
    </Layout>
  );
};

export default News;
