import Prismic from '@prismicio/client';

export const apiEndpoint = 'https://your-repo-name.prismic.io/api/v2';
export const accessToken = ''; // Se você tiver um token de acesso, adicione-o aqui.

export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
);

const createClientOptions = (req = null, prismicAccessToken = null, routes = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
