import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Header: React.FC = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='/logo.svg' alt="Logo" />
        <a>Sérgio Damasceno</a>
      </div>
      <div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#home">Home</a></li>
            <li className={styles.navItem}><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://github.com/devdamasceno" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/sergio-damasceno" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          <span>Linkedin</span>
        </a>
        <a href="https://instagram.com/sergiodamasceno_" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
