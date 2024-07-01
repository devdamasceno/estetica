import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Client } from '../../../conf/prismic-configuration';
import Prismic from '@prismicio/client';
import styles from './styles.module.css';

const Blog: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blogs</h1>
      <p className={styles.blogSubtitle}>My thoughts on technology and business, welcome to subscribe</p>
      <button className={styles.subscribeButton}>Subscribe My Blogs</button>
      <div className={styles.postsContainer}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <Image src={post.data.image.url} alt={post.data.image.alt} width={500} height={300} className={styles.postImage} />
            <div className={styles.postContent}>
              <h2>{post.data.title[0].text}</h2>
              <p>{post.data.excerpt[0].text}</p>
              <Link href={`/blog/${post.uid}`}>
                <a className={styles.readMore}>Read More &gt;&gt;</a>
              </Link>
              <div className={styles.postMeta}>
                <span className={styles.metaTag}>Web Developer</span>
                <span className={styles.metaAuthor}>Text: {post.data.author[0].text}</span>
                <span className={styles.metaDate}>Date: {post.data.date}</span>
                <span className={styles.metaReadTime}>Read: {post.data.read_time} Min</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Blog;
