import * as prismic from '@prismicio/client';

export const repositoryName = 'https://sergiodamascenocloud.cdn.prismic.io/api/v2'; // Substitua pelo nome do seu repositório

export const client = prismic.createClient(repositoryName, {
  accessToken: '', // Se você tiver um token de acesso
});
