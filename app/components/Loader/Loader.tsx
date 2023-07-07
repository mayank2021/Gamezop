import React from "react";
import Image from "next/image";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Image
        src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif"
        alt="loader"
        width={20}
        height={20}
        layout="responsive"
      />
    </div>
  );
};

export default Loader;
