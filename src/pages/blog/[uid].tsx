import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../../prismic';
import { PrismicRichText } from '@prismicio/react';

const Post: React.FC<{ post: any }> = ({ post }) => {
  return (
    <div>
      <h1>{post.data.title}</h1>
      <img src={post.data.image.url} alt={post.data.image.alt} />
      <PrismicRichText field={post.data.content} />
      <div>
        <span>{post.data.author}</span>
        <span>{new Date(post.data.date).toLocaleDateString()}</span>
        <span>{post.data.readTime} min de leitura</span>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.getAllByType('post');
  const paths = posts.map(post => ({
    params: { uid: post.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await client.getByUID('post', params.uid as string);

  return {
    props: {
      post,
    },
  };
};

export default Post;
