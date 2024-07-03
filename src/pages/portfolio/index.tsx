import Head from 'next/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import About from '@/components/about';
import Skills from '@/components/skills';
import Works from '@/components/works';
import Blog from '@/components/blog';
import Contact from '@/components/contact';

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
      <div >
        <Nav />
      </div>
      <div >
        <About />
      </div>
      <div >
        <Skills />
      </div>
      <div >
        <Works />
      </div>
      <div >
        <Blog />
      </div>
      <div >
        <Contact />
      </div>
    </>
  );
}
