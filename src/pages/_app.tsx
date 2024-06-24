import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa os estilos do Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '../../lib/fontAwesome'; // Certifique-se de que o caminho está correto

config.autoAddCss = false; // Desativa a adição automática de CSS

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
