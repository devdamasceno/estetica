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
      <div className={styles.logo}>Web3</div>
      <div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#smart-contracts">Smart Contracts</a></li>
            <li className={styles.navItem}><a href="#services">Services</a></li>
            <li className={styles.navItem}><a href="#solutions">Solutions</a></li>
            <li className={styles.navItem}><a href="#roadmap">Roadmap</a></li>
            <li className={styles.navItem}><a href="#whitepaper">Whitepaper</a></li>
          </ul>
        </nav>
        <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://github.com/devdamasceno" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/sergio-damasceno" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com/sergiodamasceno_" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </header>
  );
};

export default Header;
