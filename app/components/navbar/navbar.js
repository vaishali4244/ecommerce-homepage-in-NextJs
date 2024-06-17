import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <p className={styles.brand}>TANN TRIM</p>
        <div className={styles.navLogo}>
          <Image
            className={styles.logo}
            src="/images/Frame 51.png"
            width={24}
            height={24}
            alt="nav icon"
          />
          <Image
            className={styles.logo}
            src="/images/user-alt.png"
            width={24}
            height={24}
            alt="nav icon"
          />
          <Image
            className={styles.logo}
            src="/images/Bookmark.png"
            width={24}
            height={24}
            alt="nav icon"
          />
          <Image
            className={styles.logo}
            src="/images/shopping-bag.png"
            width={24}
            height={24}
            alt="nav icon"
          />
        </div>
      </div>
      <ul className={styles.navItem}>
        <li>Bags</li>
        <li>Travel</li>
        <li>Accesories</li>
        <li>Gifting</li>
        <li>Jewelery</li>
      </ul>
    </div>
  );
};

export default Navbar;
