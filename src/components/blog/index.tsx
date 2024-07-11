import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Blog: React.FC = () => {
  return (
    <div id='blog' className={styles.blogsContainer}>
      <div className={styles.scrollIndicator}>
        <Image src="/scroll.png" alt="Scroll icon" width={30} height={120} className={styles.image} />
      </div>
      <h2 className={styles.blogsTitle}>
        Blog
        <span></span>
      </h2>
      <p className={styles.blogsSubtitle}>
        Minhas idéias sobre tecnologia e negócios, bem-vindo ao se inscrever 👋
      </p>
      <div className={styles.blogPost}>
        <img src="/imageBlog.svg" alt="Blog Post" className={styles.blogImage} />
        <div className={styles.blogContent}>
          <h3>O que é preciso para se tornar um desenvolvedor web?</h3>
          <p>
            O desenvolvimento web, também conhecido como desenvolvimento de sites, abrange uma variedade de tarefas e processos envolvidos na criação de sites para a internet...
          </p>
          <Link legacyBehavior href='/blog'>
            <a className={styles.readMore}>Leia Mais &gt;&gt;</a>
          </Link>
          <div className={styles.blogMeta}>
            <span className={styles.blogTag}>Desenvolvedor Web</span>
            <span className={styles.blogText}>Texto: Sérgio Damasceno</span>
            <span className={styles.blogDate}>Data: 28 Junho 2024</span>
            <span className={styles.blogReadTime}>Leitura: 4 Min</span>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Link href='/blog'>
          <button className={styles.viewMore}>Ver Mais</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
