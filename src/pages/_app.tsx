import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Analytics } from '@vercel/analytics/react';
import '../../lib/fontAwesome';

config.autoAddCss = false;

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;
