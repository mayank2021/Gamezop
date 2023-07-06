"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Drawer from "./components/Drawer/Drawer";

export default function Home() {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <div className={styles.main}>
      <div className={styles.headerContainer}>
        {showDrawer ? (
          <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        ) : null}
        <Navbar setShowDrawer={setShowDrawer} />
      </div>
    </div>
  );
}
