import React from 'react';
import styles from './styles.module.css';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact: React.FC = () => {
  return (
    <div id='contact' className={styles.contactContainer}>
      <div className={styles.scrollIndicator}>
        <img src="/scroll.png" alt="Scroll icon" className={styles.image} />
      </div>
      <h2 className={styles.contactTitle}>
        Contato
        <span></span>
      </h2>
      <p className={styles.contactSubtitle}>
        Atualmente estou disponível para trabalho freelance
      </p>
      <button className={styles.contactButton}>Entre em contato</button>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Escreva seu nome" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Escreva o email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" placeholder="Escreva a mensagem"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
      </form>
      <footer className={styles.footer}>
        <p>© 2023 Todos os direitos reservados.</p>
        <div className={styles.footerLinks}>
          <a href="#">Politica de Privacidade</a>
          <a href="#">Termos & Condições</a>
        </div>
        <div className={styles.footerSocial}>
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
        <p className={styles.footerDesign}>Design By <a href="/">Sérgio Damasceno</a></p>
      </footer>
    </div>
  );
};

export default Contact;
