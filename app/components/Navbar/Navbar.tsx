import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/gamezop-large.png";
import { useGlobalContext } from "@/app/Context/store";

type NavProps = {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setShowDrawer }: NavProps) => {
  const { showMobileNav, setShowMobileNav } = useGlobalContext();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        {!showMobileNav && (
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
        )}

        <Image src={Logo} alt="logo" width={100} height={30} />
      </div>
      <div
        className={`${styles.menuToggle} ${styles.isActive}`}
        id="mobile-menu"
        onClick={() => setShowMobileNav(!showMobileNav)}
      >
        <p className={styles.bar}></p>
        <p className={styles.bar}></p>
        <p className={styles.bar}></p>
      </div>
      <ul className={`${styles.nav} ${showMobileNav && styles.mobileNav}`}>
        <li className={styles.navItem} onClick={() => setShowMobileNav(false)}>
          <Link href="/users">users</Link>
        </li>
        <li className={styles.navItem} onClick={() => setShowMobileNav(false)}>
          <Link href="/news">news</Link>
        </li>
        <li className={styles.navItem} onClick={() => setShowMobileNav(false)}>
          <Link href="/top-users">top users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
