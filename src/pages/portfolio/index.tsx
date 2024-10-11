import Head from 'next/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Blog from '@/components/blog';
import { Servicos } from '@/components/servicos';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Sérgio Damasceno</title>
        <meta name="description" content="Sérgio Damasceno Developer JS/TS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Nav />
      <Servicos />
    </>
  );
}
