import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <span className={styles.head}>
        Are You Ready to Get <span className={styles.highlight}>Naughty?</span>
      </span>
      <p>Unleash your wildest desires with models who are here to tease, please, and make it all about you.</p>
      <button className={styles.button}>
        <span className={styles.buttonHead} role="img" aria-label="video">🎥</span> Start Free Video Chat
      </button>
      <div className={styles.imageWrapper}>
        {/* <img src="/images/model-1.jpg" alt="Model 1" />
        <img src="/images/model-2.jpg" alt="Model 2" />
        <img src="/images/model-3.jpg" alt="Model 3" /> */}
      </div>
    </section>
  );
};

export default HeroSection;
