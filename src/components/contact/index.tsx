import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact: React.FC = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '', captcha: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '', captcha: '' });
  const [captchaQuestion, setCaptchaQuestion] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaQuestion(`${num1} + ${num2}`);
  };

  const validate = () => {
    let valid = true;
    let errors = { name: '', email: '', message: '', captcha: '' };

    if (!formData.name) {
      errors.name = 'O nome é obrigatório.';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'O email é obrigatório.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'O email não é válido.';
      valid = false;
    }

    if (!formData.message) {
      errors.message = 'A mensagem é obrigatória.';
      valid = false;
    }

    const [num1, num2] = captchaQuestion.split(' + ').map(Number);
    if (parseInt(formData.captcha, 10) !== num1 + num2) {
      errors.captcha = 'Resposta CAPTCHA incorreta.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('Por favor, preencha todos os campos corretamente.');
      return;
    }

    setStatus('Enviando...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '', captcha: '' });
        generateCaptcha();
      } else {
        setStatus('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div id='contact' className={styles.contactContainer}>
      <div className={styles.scrollIndicator}>
        <Image src="/scroll.png" alt="Scroll icon" width={30} height={120} className={styles.image} />
      </div>
      <h2 className={styles.contactTitle}>
        Contato
        <span></span>
      </h2>
      <p className={styles.contactSubtitle}>
        Atualmente estou disponível para trabalho freelance 🧾
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Escreva seu nome"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? styles.errorInput : ''}
          />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escreva o email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? styles.errorInput : ''}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escreva a mensagem"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? styles.errorInput : ''}
          ></textarea>
          {errors.message && <p className={styles.errorText}>{errors.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="captcha">Qual é a soma de {captchaQuestion}?</label>
          <input
            type="text"
            id="captcha"
            name="captcha"
            placeholder="Responda a pergunta"
            value={formData.captcha}
            onChange={handleChange}
            className={errors.captcha ? styles.errorInput : ''}
          />
          {errors.captcha && <p className={styles.errorText}>{errors.captcha}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
      <footer className={styles.footer}>
        <p>© 2024 Todos os direitos reservados.</p>
        <div className={styles.footerLinks}>
          <Link legacyBehavior href="/privacidade">
            <a>Politica de Privacidade</a>
          </Link>
          <Link legacyBehavior href="/termos">
            <a>Termos & Condições</a>
          </Link>
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
        <p className={styles.footerDesign}>Design By
          <Link legacyBehavior href="/">
            <a> Sérgio Damasceno</a>
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Contact;
