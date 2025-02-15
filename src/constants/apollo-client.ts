import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { config } from '@/config/env';

export const authApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${config?.apiAuthBaseUrl}/graphql`,
    credentials: 'include'
  }),
  cache: new InMemoryCache()
});

export const communicationApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${config?.apiCommunicationBaseUrl}/graphql`,
    credentials: 'include'
  }),
  cache: new InMemoryCache()
});
