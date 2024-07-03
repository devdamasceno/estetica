import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Skills: React.FC = () => {
  return (
    <div id='skills' className={styles.skillsContainer}>
      <div className={styles.aboutScroll}>
        <Image src="/scroll.png" alt="Scroll icon" width={30} height={120} className={styles.image} />
        <h1>{'</>'}</h1>
      </div>
      <h2 className={styles.skillsTitle}>
        Skills
        <span></span>
      </h2>
      <p className={styles.skillsSubtitle}>Estou me esforçando para nunca parar de aprender e melhorar 🚀</p>
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
          <span className={styles.skillHtml}>HTML</span>
        </div>
        <div className={styles.skillIconContainer}>
          <img src="/css.png" alt="CSS" />
          <span className={styles.skillCss}>CSS</span>
        </div>
        <div className={styles.skillIconContainer}>
          <img src="/js.png" alt="JavaScript" />
          <span className={styles.skillJavascript}>JS</span>
        </div>
        <div className={styles.skillIconContainer}>
          <img src="/react.png" alt="React" />
          <span className={styles.skillReact}>React</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
