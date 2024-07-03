import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Header from '@/components/header';

const TermsConditions: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Termos e Condições</h1>
        <p className={styles.update}>Última atualização: 30 de Junho de 2024</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introdução</h2>
          <p className={styles.text}>
            Estes Termos e Condições regem o uso deste site. Ao acessar e utilizar este site, você concorda em cumprir e ser vinculado a estes termos. Se você não concordar com alguma parte dos termos, não deverá usar nosso site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Uso do Site</h2>
          <p className={styles.text}>
            Você concorda em usar nosso site apenas para fins legais e de uma maneira que não infrinja os direitos de, ou restrinja ou iniba o uso e aproveitamento do site por terceiros. Comportamentos proibidos incluem assediar ou causar angústia ou inconveniência a qualquer outro usuário, transmitir conteúdos obscenos ou ofensivos ou interromper o fluxo normal de diálogo dentro do nosso site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Propriedade Intelectual</h2>
          <p className={styles.text}>
            Todo o conteúdo incluído neste site, como texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade de Sérgio Damasceno ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais internacionais.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Limitação de Responsabilidade</h2>
          <p className={styles.text}>
            Este site e as informações, conteúdos, materiais, produtos e serviços incluídos ou disponibilizados para você através deste site são fornecidos por nós "no estado em que se encontram" e "conforme disponíveis", salvo indicação em contrário por escrito. Não fazemos representações ou garantias de qualquer tipo, expressas ou implícitas, quanto ao funcionamento deste site ou às informações, conteúdos, materiais, produtos ou serviços incluídos ou disponibilizados para você através deste site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Alterações aos Termos</h2>
          <p className={styles.text}>
            Reservamo-nos o direito de fazer alterações no nosso site, nas políticas e nestes Termos e Condições a qualquer momento. Você estará sujeito às políticas e Termos e Condições em vigor no momento em que usar o site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Contato</h2>
          <p className={styles.text}>
            Se você tiver alguma dúvida sobre estes Termos e Condições, entre em contato conosco:
          </p>
          <p className={styles.text}>Email: sergio@suporteinfojf.com.br</p>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
