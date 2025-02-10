'use client';
import { SessionProvider } from 'next-auth/react';
import { ApolloClientProvider } from './apollo-client-provider';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ApolloClientProvider>
      <SessionProvider>{children}</SessionProvider>
    </ApolloClientProvider>
  );
};

export default Providers;
