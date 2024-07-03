import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSelect = (item: string) => {
    setSelected(item);
    setMobileMenuOpen(false); 
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src='/logo.svg' alt="Logo" width={50} height={50} />
          <a>Sérgio Damasceno</a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link legacyBehavior href="/">
                <a
                  className={selected === 'home' ? styles.selected : ''}
                  onClick={() => handleSelect('home')}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link legacyBehavior href="/blog">
                <a
                  className={selected === 'blog' ? styles.selected : ''}
                  onClick={() => handleSelect('blog')}
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
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
      {isMobileMenuOpen && (
        <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/">
                  <a
                    className={selected === 'home' ? styles.selected : ''}
                    onClick={() => handleSelect('home')}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.closeButton} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

export default Header;
