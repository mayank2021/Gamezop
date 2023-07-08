"use client";
import { useEffect } from "react";
import styles from "./UserContainer.module.css";
import UserCard from "../UserCard/UserCard";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import { useGlobalContext } from "@/app/Context/store";

type serachProps = {
  userData?: any;
  page: string;
};

const UserContainer = ({ userData, page }: serachProps) => {
  const {
    handleSearch,
    usersData,
    query,
    userDetails,
    showModal,
    setShowModal,
    storangeChange,
    setUserDataOnInitialization,
  } = useGlobalContext();

  useEffect(() => {
    if (page === "topUser") {
      let data = JSON.parse(window.localStorage.getItem("topUsers") || "[]");
      setUserDataOnInitialization(data);
    } else if (page === "user") {
      setUserDataOnInitialization(userData);
    }
  }, [page, storangeChange]);

  if (usersData?.length === 0) return <Loader />;

  return (
    <>
      {showModal && (
        <Modal
          userDetails={userDetails}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className={styles.inputContainer}>
        <input
          className={styles.searchBar}
          placeholder="Search user"
          value={query}
          onChange={(e) => handleSearch(e.target.value, userData)}
        />
      </div>
      <div className={styles.wrapper}>
        {usersData?.map((user: any) => (
          <UserCard
            key={user.id}
            userId={user.id}
            name={user.username}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
};

export default UserContainer;
