import React from 'react';
import styles from './styles.module.css';

const Works: React.FC = () => {
  return (
    <div className={styles.worksContainer}>
      <div className={styles.scrollIndicator}>
        <img src="/scroll.png" alt="Scroll icon" className={styles.image} />
      </div>
      <h2 className={styles.worksTitle}>
        Works
        <span></span>
      </h2>
      <p className={styles.worksSubtitle}>I had the pleasure of working with these awesome projects</p>
      <div className={styles.projectDisplay}>
        <div className={styles.project}>
          <img src="/coding.png" alt="Coding Project" className={styles.projectImage} />
          <a href="#" className={styles.projectLink}>View Website</a>
        </div>
        <div className={styles.project}>
          <img src="/website.png" alt="Website Project" className={styles.projectImage} />
          <a href="#" className={styles.projectLink}>View Website</a>
        </div>
      </div>
    </div>
  );
};

export default Works;
