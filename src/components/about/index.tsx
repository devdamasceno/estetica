import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const About: React.FC = () => {
  return (
    <div id='about' className={styles.aboutContainer}>
      <div className={styles.aboutScroll}>
        <Image src="/scroll.png" alt="Scroll icon" width={30} height={30} className={styles.image} />
      </div>
      <div className={styles.headingContent}>
        <div className={styles.heading}>
          <h2>Sobre</h2>
        </div>
      </div>
      <div className={styles.aboutContentWrap}>
        <div className={styles.aboutContent}>
          <div className={styles.intro}>
            <div className={styles.codeBlock}>
              <span className={styles.codeTag}>&lt;p&gt;</span><br />
              <span className={styles.highlight} style={{ fontSize: '1.5rem' }}>Olá!</span><br />
              <span className={styles.highlightText}>
                Meu nome é Sérgio Damasceno e sou especialista em desenvolvimento web que utiliza
                <span className={styles.highlight}> HTML</span>,
                <span className={styles.highlight}> CSS</span>,
                <span className={styles.highlight}> JS</span>,
                and
                <span className={styles.highlight}> REACT</span> etc.<br />
                Sou um indivíduo altamente motivado e um eterno otimista, dedicado a escrever códigos claros, concisos e robustos que funcionem. Esforçando-se para nunca parar de aprender e melhorar.<br />
                Quando não estou codificando, estou <span className={styles.highlight}>ESCREVENDO BLOG</span>, lendo ou praticando algum <span className={styles.highlight}>ESPORTE</span>.<br />
                Gosto de ter minha perspectiva e sistemas de crenças desafiados para ver o mundo com novos olhos.<br />
              </span>
              <span className={styles.codeTag}>&lt;/p&gt;</span>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <Image src='/about.png' alt='Dev Code' width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;