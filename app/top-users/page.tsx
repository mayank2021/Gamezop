"use client";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import UserContainer from "../components/UserContainer/UserContainer";

const TopUsers = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(
      window.localStorage.getItem("topUsers") || "[]"
    );
    setUsersData(userData);
  }, []);
  return (
    <Layout>
      <Heading heading="Top Users" />
      <UserContainer userData={usersData} page="topUser" />
    </Layout>
  );
};

export default TopUsers;
