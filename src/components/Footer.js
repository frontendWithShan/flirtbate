import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader}>
        <h1 className={styles.footerTitle}>Flirtbate</h1>
        <button className={styles.footerButton} onClick={handleButtonClick}>
          By the Way
        </button>
      </div>
      {showList && (
        <div className={styles.footerListContainer}>
          <ul className={styles.footerList}>
            <li>Home</li>
            <li>FAQs</li>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
          <ul className={styles.footerList}>
            <li>Home</li>
            <li>FAQs</li>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
          <ul className={styles.footerList}>
            <li>Resources</li>
            <li>Privacy statement</li>
            <li>Cookie statement</li>
            <li>Terms and conditions</li>
          </ul>
          <ul className={styles.footerList}>
            <li>Resources</li>
            <li>Privacy statement</li>
            <li>Cookie statement</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      )}
      <div className={styles.footerBottom}>
        <p>© 2025 Flirtbate, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
