import React from 'react';
import styles from './styles.module.css';

const Works: React.FC = () => {
  return (
    <div id='works' className={styles.worksContainer}>
      <div className={styles.scrollIndicator}>
        <img src="/scroll.png" alt="Scroll icon" className={styles.image} />
      </div>
      <h2 className={styles.worksTitle}>
        Works
        <span></span>
      </h2>
      <p className={styles.worksSubtitle}>Tive o prazer de trabalhar com esses projetos incríveis!</p>
      <div className={styles.projectDisplay}>
        <div className={styles.project}>
          <img src="/backgroundWork.svg" alt="Coding Project" className={styles.projectImage} />
        </div>
      </div>
    </div>
  );
};

export default Works;
