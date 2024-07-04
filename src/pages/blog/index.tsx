import React from 'react';
import { GetStaticProps } from 'next';
import { client } from '../../../prismic';
import { PrismicRichText } from '@prismicio/react';
import styles from './styles.module.css';
import Head from 'next/head';
import Header from '@/components/header';

const Blog: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <>
      <Header />
      <Head>
        <title>Blog - Sérgio Damasceno</title>
      </Head>
      <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <p className={styles.blogSubtitle}>Últimas postagens 📶</p>
        <div className={styles.postsContainer}>
          {posts.map((post, index) => (
            <div key={index} className={styles.post}>
              <img src={post.data.image.url} alt={post.data.image.alt} className={styles.postImage} />
              <div className={styles.postContent}>
                <h2>{post.data.titulo[0].text}</h2>
                <PrismicRichText field={post.data.conteudo.slice(0, 1)} />
                <a href={`/blog/${post.slugs[0]}`} className={styles.readMore}>Leia mais</a>
                <div className={styles.postMeta}>
                  <span className={styles.metaAuthor}>📝 {post.data.autor[0].text}</span>
                  <span className={styles.metaDate}>🗓️ {new Date(post.first_publication_date).toLocaleDateString()}</span>
                  <span className={styles.metaReadTime}>⌛ {post.data.tempo_de_leitura} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.getAllByType('post', { orderings: [{ field: 'my.post.date', direction: 'desc' }] });

  const mappedPosts = posts.map((post: any) => ({
    uid: post.uid,
    slugs: post.slugs,
    first_publication_date: post.first_publication_date,
    data: {
      titulo: post.data.titulo,
      image: post.data.image,
      conteudo: post.data.conteudo,
      autor: post.data.autor,
      tempo_de_leitura: post.data.tempo_de_leitura,
      date: post.data.date || null,
    },
  }));

  return {
    props: {
      posts: mappedPosts,
    },
  };
};

export default Blog;
