import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          Flirtbate
        </Link>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Search" />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`${styles.actions} ${isMenuOpen ? styles.show : ''}`}>
          <select className={styles.language}>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.freeCallButton}>
            Get 1 minute of Free Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;