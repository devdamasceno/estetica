import { AnimatePresence, motion } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Analytics } from '@vercel/analytics/react';
import '../../lib/fontAwesome';
import '../../public/styles/globals.css';

config.autoAddCss = false;

import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          key={router.route}
          initial={{ opacity: 1 }}
          animate={{ opacity: 5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}

export default MyApp;
