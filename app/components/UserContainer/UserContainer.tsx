"use client";
import { useState, useEffect } from "react";
import styles from "./UserContainer.module.css";
import UserCard from "../UserCard/UserCard";
import Modal from "../Modal/Modal";

type serachProps = {
  userData?: any;
  page: string;
};

const UserContainer = ({ userData, page }: serachProps) => {
  const [usersData, setUsersData] = useState(userData);
  const [query, setQuery] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState({});
  const [storangeChange, setStorageChange] = useState<boolean>(false);

  useEffect(() => {
    if (page === "topUser") {
      let data = JSON.parse(window.localStorage.getItem("topUsers") || "[]");
      setUsersData(data);
    }
  }, [page, storangeChange]);

  const handleSearch = (que: string) => {
    setQuery(que);
    if (que && !null) {
      let data = userData.filter(
        (user: any) =>
          user?.username?.toLowerCase()?.includes(que) ||
          user?.email?.toLowerCase()?.includes(que)
      );
      setUsersData(data);
    } else {
      setUsersData(userData);
    }
  };

  const showUserDetails = (id: number) => {
    let user = usersData.find((ele: any) => ele.id === id);
    setUserDetails(user);
    setShowModal(true);
  };

  const handleTopUser = (id: number) => {
    let user = usersData.find((user: any) => user.id === id);
    let topUsers = JSON.parse(localStorage.getItem("topUsers") || "[]");
    let unique =
      topUsers.length && topUsers.some((user: any) => user.id === id);

    if (unique === 0 || !unique) {
      localStorage.setItem("topUsers", JSON.stringify([...topUsers, user]));
    } else {
      let removeUser = topUsers.filter((user: any) => user.id !== id);
      localStorage.setItem("topUsers", JSON.stringify(removeUser));
    }
    setStorageChange(!storangeChange);
  };

  return (
    <>
      {showModal && (
        <Modal
          userDetails={userDetails}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <input
        className={styles.searchBar}
        placeholder="Search user"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div className={styles.wrapper}>
        {usersData?.map((user: any) => (
          <UserCard
            key={user.id}
            userId={user.id}
            name={user.username}
            email={user.email}
            query={query}
            storangeChange={storangeChange}
            setStorageChange={setStorageChange}
            showUserDetails={showUserDetails}
            handleTopUser={handleTopUser}
          />
        ))}
      </div>
    </>
  );
};

export default UserContainer;
