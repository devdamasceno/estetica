import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faCode, faDesktop, faPencilAlt, faEnvelope, faLocationArrow, faBriefcase, faLink, faDownload, fa2, fa6, fa3 } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const Nav: React.FC = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetHref = e.currentTarget.getAttribute('href');
    if (targetHref) {
      const targetId = targetHref.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  return (
    <>
      <h1 id='nav' className={styles.developer}>developer</h1>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <ul className={styles.sidebarNav}>
            <li><a href="#nav" onClick={handleScroll}><FontAwesomeIcon icon={faBars} size={'2xs'} /></a></li>
            <li><a href="#about" onClick={handleScroll}><FontAwesomeIcon icon={faUser} size={'2xs'} /></a></li>
            <li><a href="#skills" onClick={handleScroll}><FontAwesomeIcon icon={faCode} size={'2xs'} /></a></li>
            <li><a href="#works" onClick={handleScroll}><FontAwesomeIcon icon={faDesktop} size={'2xs'} /></a></li>
            <li><a href="#blog" onClick={handleScroll}><FontAwesomeIcon icon={faPencilAlt} size={'2xs'} /></a></li>
            <li><a href="#contact" onClick={handleScroll}><FontAwesomeIcon icon={faEnvelope} size={'2xs'} /></a></li>
          </ul>
        </aside>
        <main className={styles.mainContent}>
          <section className={styles.profile}>
            <div className={styles.profileCard}>
              <img src="/profile.png" alt="profile" className={styles.profileImg} />
              <h2>Sérgio Damasceno</h2>
              <h3>Full-Stack Developer</h3>
              <ul className={styles.profileInfo}>
                <li><FontAwesomeIcon icon={faEnvelope} color='#12F7D6' /> sergio@suporteinfojf.com.br</li>
                <li><FontAwesomeIcon icon={faLocationArrow} color='#12F7D6' /> Brasil</li>
                <li><FontAwesomeIcon icon={faBriefcase} color='#12F7D6' /> Full-time / Freelancer</li>
                <li><FontAwesomeIcon icon={faLink} color='#12F7D6' /> www.sergiodamasceno.cloud</li>
              </ul>
              <div className={styles.profileSkills}>
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>REACT</span>
              </div>
              <button className={styles.downloadCv}>Download CV <FontAwesomeIcon icon={faDownload} color='#292F36' /></button>
            </div>
          </section>
          <section className={styles.intro}>
            <div className={styles.tags}>
              <p>{'<h1>'}</p>
            </div>
            <h1>Olá<br />Eu sou <span>Sérgio</span>,<br />Desenvolvedor Full-Stack<span style={{ fontSize: '0.8rem', marginLeft: '1rem', fontWeight: '100', color: '#98FAEC' }}>{'<h1>'}</span></h1>
            <p>Ajudo empresas a crescer criando experiências web incríveis. Se você está procurando um desenvolvedor que gosta de fazer as coisas acontecerem,</p>
            <a href="mailto:sergio@suporteinfojf.com.br" className={styles.contactLink}>Vamos Conversar <FontAwesomeIcon icon={faEnvelope} /></a>
          </section>
          <div className={styles.skillProfileCard}>
            <ul className={styles.skillProfileInfo}>
              <li style={{ fontSize: '0.9rem' }}><FontAwesomeIcon icon={fa2} color='#12F7D6' size={'2x'} /> Linguagem<br />Programação</li>
              <li style={{ fontSize: '0.9rem' }}><FontAwesomeIcon icon={fa6} color='#12F7D6' size={'2x'} /> Ferramentas<br />Desenvolvimento</li>
              <li style={{ fontSize: '0.9rem' }}><FontAwesomeIcon icon={fa3} color='#12F7D6' size={'2x'} /> Anos de<br />experiencia</li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default Nav;
