"use client";
import NewsCard from "../components/NewsCard/NewsCard";
import Heading from "../components/Heading/Heading";
import styles from "./page.module.css";
import Modal from "../components/Modal/Modal";
import Loader from "../components/Loader/Loader";
import { useGlobalContext } from "../context/store";

const News = () => {
  const { news, showModal, setShowModal, activeUser, setActiveUser } =
    useGlobalContext();

  if (news?.length === 0) return <Loader />;

  return (
    <>
      {showModal && (
        <Modal
          title={activeUser?.tit}
          description={activeUser?.desc}
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
              activeUser={activeUser}
              setActiveUser={setActiveUser}
              setShowModal={setShowModal}
            />
          ))}
      </div>
    </>
  );
};

export default News;
