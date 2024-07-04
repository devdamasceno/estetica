import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../../prismic';
import { PrismicRichText } from '@prismicio/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './uid.module.css';
import Header from '@/components/header';
import Head from 'next/head';

const Post: React.FC<{ post: any }> = ({ post }) => {
  if (!post || !post.data) {
    return <div>Post não encontrado</div>;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <Head>
        <title>Blog - Sérgio Damasceno</title>
      </Head>
      <Header />
      <h1 className={styles.blogTitle}>Blog</h1>
      <p className={styles.blogSubtitle}>Últimas postagens 📶</p>
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>{post.data.titulo?.[0]?.text || 'Título não disponível'}</h1>
        {post.data.image?.url && (
          <img src={post.data.image.url} alt={post.data.image.alt || 'Imagem do post'} className={styles.postImage} />
        )}
        <div className={styles.postMeta}>
          <span className={styles.metaAuthor}>📝 {post.data.autor?.[0]?.text || 'Autor desconhecido'}</span>
          <span className={styles.metaDate}>🗓️ {new Date(post.first_publication_date).toLocaleDateString()}</span>
          <span className={styles.metaReadTime}>⌛ {post.data.tempo_de_leitura || 'Tempo de leitura não disponível'} min</span>
        </div>
        <div className={styles.postContent}>
          <PrismicRichText field={post.data.conteudo || []} />
        </div>
        <div className={styles.shareContainer}>
          <p>Compartilhe:</p>
          <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.data.titulo?.[0]?.text || '')}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className={styles.shareIcon} />
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className={styles.shareIcon} />
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.data.titulo?.[0]?.text || '')}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.shareIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.getAllByType('post');
  const paths = posts
    .filter(post => post.uid)
    .map(post => ({
      params: { uid: post.uid || '' },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.uid) {
    return {
      notFound: true,
    };
  }

  const post = await client.getByUID('post', params.uid as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default Post;
