'use client';
import { authApolloClient, communicationApolloClient } from '@/constants';
import { ApolloProvider } from '@apollo/client';

type IApolloClientProvider = {
  children: React.ReactNode;
};

export const ApolloClientProvider: React.FC<IApolloClientProvider> = ({
  children
}) => {
  return (
    <ApolloProvider client={authApolloClient}>
      <ApolloProvider client={communicationApolloClient}>
        {children}
      </ApolloProvider>
    </ApolloProvider>
  );
};
