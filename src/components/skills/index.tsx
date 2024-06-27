import React from 'react';
import styles from './styles.module.css';

const Skills: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.aboutScroll}>
        <img src="/scroll.png" alt="Scroll icon" className={styles.image} />
        <h1>{'</>'}</h1>
      </div>
      <h2 className={styles.skillsTitle}>
        Skills
        <span></span>
      </h2>
      <p className={styles.skillsSubtitle}>Estou me esforçando para nunca parar de aprender e melhorar</p>
      <div className={styles.skillsGrid}>
        <div className={styles.skillBox}>
          <div className={styles.skillIcon}>💻</div>
          <h3>Web Development</h3>
          <p>HTML • CSS • JS • REACT</p>
        </div>
        <div className={styles.skillBox}>
          <div className={styles.skillIcon}>📱</div>
          <h3>App Development</h3>
          <p>iOS • Android</p>
        </div>
      </div>
      <div className={styles.skillsIcons}>
        <div className={styles.skillIconContainer}>
          <img src="/html.png" alt="HTML" />
          <span>HTML</span>
        </div>
        <div className={styles.skillIconContainer}>
          <img src="/css.png" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className={styles.skillIconContainer}>
          <img src="/js.png" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className={styles.skillIconContainer}>
          <img src="/react.png" alt="React" />
          <span>React</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
