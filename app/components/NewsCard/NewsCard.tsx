"use client";
import styles from "./NewsCard.module.css";

type data = {
  tit: string;
  desc: string;
};

type userProps = {
  title: string;
  description: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeUser: data;
  setActiveUser: React.Dispatch<React.SetStateAction<data>>;
};

const NewsCard = ({
  title,
  description,
  activeUser,
  setActiveUser,
  setShowModal,
}: userProps) => {
  const handleShowModal = (tit: string, desc: string) => {
    setShowModal(true);
    setActiveUser({ ...activeUser, tit: tit, desc: desc });
  };
  return (
    <>
      <div className={styles.newsCard}>
        <h2>{title.slice(0, 14)}...</h2>
        <p>
          {description.slice(0, 60)}...
          <button
            className={styles.readMoreButton}
            onClick={() => handleShowModal(title, description)}
          >
            Read more
          </button>
        </p>
      </div>
    </>
  );
};

export default NewsCard;
