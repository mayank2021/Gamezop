"use client";
import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import UserContainer from "../components/UserContainer/UserContainer";

const TopUsers = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    if (window !== undefined) {
      const userData = JSON.parse(localStorage.getItem("topUsers") || "[]");
      setUsersData(userData);
    }
  }, []);
  return (
    <>
      <Heading heading="Top Users" />
      <UserContainer userData={usersData} page="topUser" />
    </>
  );
};

export default TopUsers;
