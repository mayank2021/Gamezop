"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ActiveUserType, userType, ContextProps } from "./storeType";

const GlobalContext = createContext<ContextProps>({
  topUsers: [],
  blockedUsers: [],
  // ------------------------------NEWS PAGE START--------------------------
  news: [],
  setNews: (): any[] => [],
  showModal: false,
  setShowModal: (): boolean => false,
  activeUser: { tit: "", desc: "" },
  setActiveUser: () => {},
  // ------------------------------NEWS PAGE END--------------------------
  // ------------------------------USER PAGE START--------------------------
  usersData: [],
  setUsersData: (): any[] => [],
  query: "",
  setQuery: (): string => "",
  handleSearch: (que: string, userData: any) => {},
  userDetails: {},
  setUserDetails: () => {},
  showUserDetails: (id: number) => {},
  handleTopUser: (id: number) => {},
  storangeChange: false,
  setStorageChange: (): boolean => false,
  handleUserControl: (userId: number) => {},
  setUserDataOnInitialization: (userData: any) => {},
  showMobileNav: false,
  setShowMobileNav: (): boolean => false,
});

type providerProps = {
  children: React.ReactNode;
};

export const GlobalContextProvider = ({ children }: providerProps) => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [storangeChange, setStorageChange] = useState<boolean>(false);

  const [blockedUsers, setblockedUsers] = useState<any[]>([]);
  const [topUsers, setTopUsers] = useState<any[]>([]);

  useEffect(() => {
    setblockedUsers(JSON.parse(localStorage?.getItem("blockedUsers") || "[]"));
    setTopUsers(JSON.parse(localStorage?.getItem("topUsers") || "[]"));
  }, [storangeChange]);

  //------------------------------------NEWS PAGE START------------------------------
  const [news, setNews] = useState<any>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<ActiveUserType>({
    tit: "",
    desc: "",
  });

  // FETCH NEWS
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

  // ------------------------------NEWS PAGE END--------------------------
  // ------------------------------USER PAGE START--------------------------
  const [usersData, setUsersData] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [userDetails, setUserDetails] = useState({});

  // HANDLE THE QUERY IN SEARCH BOX
  const handleSearch = (que: string, userData: any) => {
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

  // SHOW THE ALL USER DETAILS
  const showUserDetails = (id: number) => {
    let user = usersData.find((ele: any) => ele.id === id);
    setUserDetails(user);
    setShowModal(true);
  };

  // ADD OR REMOVE AS A TOP USER
  const handleTopUser = (id: number) => {
    let user = usersData.find((user: any) => user.id === id);
    // let topUsers = JSON.parse(localStorage.getItem("topUsers") || "[]");
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

  // BLOCKED OR UNBLOCKED A USER
  const handleUserControl = (userId: number) => {
    let arr = JSON.parse(localStorage.getItem("blockedUsers") || "[]");
    let isBlocked: boolean = arr?.some((user: userType) => user.id === userId);

    if (isBlocked) {
      arr = arr.filter((user: userType) => user.id !== userId);
      localStorage.setItem("blockedUsers", JSON.stringify(arr));
    } else {
      arr.push({
        id: userId,
        expiryTime: Date.now() + 300000,
      });
      localStorage.setItem("blockedUsers", JSON.stringify(arr));
    }
    setStorageChange(!storangeChange);
  };

  // SET THE INITIATE DATA
  const setUserDataOnInitialization = (userData: any) => {
    setUsersData(userData);
  };

  // UNBLOCKED, BLOCKED USER AFTER X(5) MINS

  const isExpire = (arr: any, ele: any, ind: number) => {
    let neArr1 = [...arr];
    setTimeout(() => {
      let arr = neArr1.slice(ind + 1);
      localStorage.setItem("blockedUsers", JSON.stringify(arr));
    }, ele?.expiryTime - Date.now());
    setStorageChange(!storangeChange);
  };

  const checkExpiry = (blckedUser: any) => {
    for (let i = 0; i < blckedUser.length; i++) {
      isExpire(blckedUser, blckedUser[i], i);
    }
  };

  const handleUnblockAfterXmin = () => {
    let sorted = blockedUsers?.sort((p1: any, p2: any) =>
      p1?.expiryTime > p2?.expiryTime
        ? 1
        : p1?.expiryTime < p2?.expiryTime
        ? -1
        : 0
    );
    checkExpiry(sorted);
  };

  useEffect(() => {
    if (blockedUsers.length !== 0) {
      handleUnblockAfterXmin();
    }
  }, [blockedUsers]);

  // ------------------------------USER PAGE END--------------------------

  return (
    <GlobalContext.Provider
      value={{
        news,
        setNews,
        showModal,
        setShowModal,
        activeUser,
        setActiveUser,
        usersData,
        setUsersData,
        query,
        setQuery,
        handleSearch,
        userDetails,
        setUserDetails,
        showUserDetails,
        handleTopUser,
        storangeChange,
        setStorageChange,
        handleUserControl,
        setUserDataOnInitialization,
        showMobileNav,
        setShowMobileNav,
        topUsers,
        blockedUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
