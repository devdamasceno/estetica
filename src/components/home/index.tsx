import Head from 'next/head';
import styles from './styles.module.css';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bem vindo - Sérgio Damasceno</title>
        <meta name="description" content="Sérgio Damasceno Developer JS/TS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src="/profile.png" alt="Sérgio Damasceno" className={styles.profileImg} />
          <h1>Sérgio Damasceno</h1>
          <p>Developer JS/TS</p>
        </div>
        <div className={styles.links}>
          <Link legacyBehavior href="/portfolio">
            <a className={styles.button}>Portfólio</a>
          </Link>
          <Link legacyBehavior href="/web">
            <a className={styles.button}>Web3</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
