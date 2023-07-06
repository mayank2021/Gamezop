import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/gamezop-large.png";

type NavProps = {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setShowDrawer }: NavProps) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.hamburger}
          onClick={() => setShowDrawer(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <Image src={Logo} alt="logo" width={100} height={30} />
      </div>
      <div className={styles.menuToggle} id="mobile-menu">
        <p className={styles.bar}></p>
        <p className={styles.bar}></p>
        <p className={styles.bar}></p>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="#">Users</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">News</a>
        </li>
        <li className={styles.navItem}>
          <a href="#">top users</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
