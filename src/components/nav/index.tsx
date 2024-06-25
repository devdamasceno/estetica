import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faCode, faDesktop, faPencilAlt, faEnvelope, faLocationArrow, faBriefcase, faLink } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css';

const Nav: React.FC = () => {
  return (
    <>
      <h1 className={styles.developer}>developer</h1>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <ul className={styles.sidebarNav}>
            <li><a href="#"><FontAwesomeIcon icon={faBars} size={'2xs'} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faUser} size={'2xs'} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faCode} size={'2xs'} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faDesktop} size={'2xs'} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faPencilAlt} size={'2xs'} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faEnvelope} size={'2xs'} /></a></li>
          </ul>
        </aside>
        <main className={styles.mainContent}>
          <section className={styles.profile}>
            <div className={styles.profileCard}>
              <img src="/profile.png" alt="profile" className={styles.profileImg} />
              <h2>Sérgio Damasceno</h2>
              <h3>Full-Stack Developer</h3>
              <ul className={styles.profileInfo}>
                <li><FontAwesomeIcon icon={faEnvelope} /> sergio@suporteinfojf.com.br</li>
                <li><FontAwesomeIcon icon={faLocationArrow} /> Brasil</li>
                <li><FontAwesomeIcon icon={faBriefcase} /> Full-time / Freelancer</li>
                <li><FontAwesomeIcon icon={faLink} /> www.sergiodamasceno.cloud</li>
              </ul>
              <div className={styles.profileSkills}>
                <span><FontAwesomeIcon icon={faHtml5} /> HTML</span>
                <span><FontAwesomeIcon icon={faCss3Alt} /> CSS</span>
                <span><FontAwesomeIcon icon={faJs} /> JS</span>
                <span><FontAwesomeIcon icon={faReact} /> REACT</span>
              </div>
              <button className={styles.downloadCv}>Download CV</button>
            </div>
          </section>
          <section className={styles.intro}>
            <h1>Olá<br />Eu sou <span>Sérgio</span>,<br />Desenvolvedor Full-Stack</h1>
            <p>Eu ajudo empresas a crescer criando experiências web incríveis. Se você está procurando um desenvolvedor que gosta de fazer as coisas acontecerem,</p>
            <a href="#" className={styles.contactLink}>Vamos Conversar <FontAwesomeIcon icon={faEnvelope} /></a>
          </section>
        </main>
      </div>
    </>
  );
};

export default Nav;
