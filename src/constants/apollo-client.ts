import { config } from '@/config/env';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: `${config?.apiBaseUrl}/graphql`,
  credentials: 'include'
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
