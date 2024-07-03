import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Header from '@/components/header';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.update}>Última atualização: 30 de Junho de 2024</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introdução</h2>
          <p className={styles.text}>
            Bem-vindo ao nosso site. Estamos comprometidos em proteger sua privacidade online. Esta Política de Privacidade explica nossas práticas de coleta, uso e divulgação de informações.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Informações que Coletamos</h2>
          <p className={styles.text}>
            Coletamos vários tipos de informações para diversos fins, incluindo para fornecer e melhorar nosso serviço.
          </p>
          <ul className={styles.list}>
            <li>Informações Pessoais</li>
            <li>Dados de Uso</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Uso das Informações</h2>
          <p className={styles.text}>
            Utilizamos as informações coletadas para vários fins, como:
          </p>
          <ul className={styles.list}>
            <li>Fornecer e manter nosso serviço</li>
            <li>Notificar sobre mudanças em nosso serviço</li>
            <li>Fornecer suporte ao cliente</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Segurança das Informações</h2>
          <p className={styles.text}>
            A segurança de suas informações é importante para nós, mas lembre-se de que nenhum método de transmissão pela internet ou de armazenamento eletrônico é 100% seguro.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Contato</h2>
          <p className={styles.text}>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
          </p>
          <p className={styles.text}>Email: sergio@suporteinfojf.com.br</p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
