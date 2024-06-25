import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <>
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src='/logo.svg' alt="Logo" />
        <a>Sérgio Damasceno</a>
      </div>
      <div>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="#home"
                className={selected === 'home' ? styles.selected : ''}
                onClick={() => handleSelect('home')}
              >
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#blog"
                className={selected === 'blog' ? styles.selected : ''}
                onClick={() => handleSelect('blog')}
              >
                Blog
              </a>
            </li>
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
    <hr />
  </>
  );
};

export default Header;
