'use client';
import { SessionProvider } from 'next-auth/react';
import { ApolloClientProvider } from './apollo-client-provider';
import { AuthProvider } from './auth.provider';
import { ToastContainer, Bounce } from 'react-toastify';
type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ApolloClientProvider>
      <SessionProvider>
        <AuthProvider>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </AuthProvider>
      </SessionProvider>
    </ApolloClientProvider>
  );
};

export default Providers;
