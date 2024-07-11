import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="stylesheet" href="/styles/globals.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha384-1C8XN4XjqK8g93GG7QXz9zq5fCnLfvKpg7V9ca5FZB0Chz69UO3r22UdoJKKlj0a"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
