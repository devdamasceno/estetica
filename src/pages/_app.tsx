import { AnimatePresence, motion } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Analytics } from '@vercel/analytics/react';
import '../../lib/fontAwesome';

config.autoAddCss = false;

import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/globals.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-1C8XN4XjqK8g93GG7QXz9zq5fCnLfvKpg7V9ca5FZB0Chz69UO3r22UdoJKKlj0a" crossOrigin="anonymous" />
      </Head>
      <AnimatePresence mode="sync">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;