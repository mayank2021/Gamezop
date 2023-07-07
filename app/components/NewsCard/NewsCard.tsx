"use client";
import { useState } from "react";
import styles from "./NewsCard.module.css";
import Modal from "../Modal/Modal";

type data = {
  tit: string;
  desc: string;
};

type userProps = {
  title: string;
  description: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: data;
  setData: React.Dispatch<React.SetStateAction<data>>;
};

const NewsCard = ({
  title,
  description,
  data,
  setData,
  setShowModal,
}: userProps) => {
  const handleShowModal = (tit: string, desc: string) => {
    setShowModal(true);
    setData({ ...data, tit: tit, desc: desc });
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
