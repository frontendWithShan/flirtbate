import React, { useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import an icon
import styles from '../styles/TrendingSection.module.css';

const TrendingSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = scrollRef.current;

    const startScrolling = () => {
      let scrollAmount = 0;

      const scrollInterval = setInterval(() => {
        scrollAmount += 1; // Increment scroll position
        if (scroll.scrollLeft >= scroll.scrollWidth / 2) {
          scroll.scrollLeft = 0; // Reset to the start when halfway
        } else {
          scroll.scrollLeft = scrollAmount;
        }
      }, 20);

      return () => clearInterval(scrollInterval); // Cleanup on component unmount
    };

    startScrolling();
  }, []);

  const trendingUsers = [
    { name: 'Siri', country: 'Lesotho' },
    { name: 'Rayna', country: 'Belgium' },
    { name: 'Fana', country: 'Korea' },
    { name: 'Jest', country: 'Angola' },
    { name: 'Ksenia', country: 'Bhutan' },
    { name: 'Ayush Soni', country: 'American' },
    { name: 'Titi', country: 'Albania' },
  ];

  // Duplicate the list to enable seamless scrolling
  const usersToRender = [...trendingUsers, ...trendingUsers];

  return (
    <section className={styles.trending}>
      <h2>🔥 Trending Now</h2>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {usersToRender.map((user, index) => (
          <div key={index} className={styles.user}>
            <FaUserCircle size={50} color="#ccc" className={styles.icon} />
            <div className={styles.userInfo}>
              <p className={styles.name}>{user.name}</p>
              <span className={styles.country}>{user.country}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
