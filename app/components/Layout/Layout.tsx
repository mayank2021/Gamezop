"use client";
import React, { PropsWithChildren, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Drawer from "../Drawer/Drawer";
import styles from "./Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <div className={styles.headerContainer}>
        {showDrawer ? (
          <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        ) : null}
        <Navbar setShowDrawer={setShowDrawer} />
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </>
  );
};
export default Layout;
