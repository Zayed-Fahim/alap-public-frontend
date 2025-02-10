'use client';
import { apolloClient } from '@/constants';
import { ApolloProvider } from '@apollo/client';

type IApolloClientProvider = {
  children: React.ReactNode;
};

export const ApolloClientProvider: React.FC<IApolloClientProvider> = ({
  children
}) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
