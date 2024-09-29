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
          <Link href='/portfolio'>
            <Image src='/logo.svg' alt="Logo" width={50} height={50} />
          </Link>
          <a>Sérgio Damasceno</a>
        </div>
        <nav className={styles.navDesktop}>
          <Link legacyBehavior href="/portfolio">
            <a>INíCIO</a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a>CLÍNICA</a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a>SERVIÇOS</a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a>SOBRE</a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a>CLIENTES</a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a>MATÉRIAS</a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a>DÚVIDAS</a>
          </Link>
        </nav>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link legacyBehavior href="/">
                <a
                  className={selected === 'home' ? styles.selected : ''}
                  onClick={() => handleSelect('home')}
                >
                  INíCIO
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link legacyBehavior href="/blog">
                <a
                  className={selected === 'blog' ? styles.selected : ''}
                  onClick={() => handleSelect('blog')}
                >
                  CLÍNICA
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>
        <button className={styles.botaoAgendamento}>AGENDE UM HORÁRIO</button>
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
                    INíCIO
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    CLÍNICA
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    SERVIÇOS
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    SOBRE
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    CLIENTES
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    MATÉRIAS
                  </a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link legacyBehavior href="/blog">
                  <a
                    className={selected === 'blog' ? styles.selected : ''}
                    onClick={() => handleSelect('blog')}
                  >
                    DÚVIDAS
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
