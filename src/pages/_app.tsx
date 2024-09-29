import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../../public/styles/globals.css'; // Importa o CSS global após o Slick
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;