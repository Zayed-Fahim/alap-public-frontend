import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { emailRegex } from "./utils/validation";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      authorize: async (credential: any) => {
        if (!credential?.email || !credential.password)
          throw new Error("Invalid credentials!");

        if (credential?.email && !emailRegex.test(credential?.email))
          throw new Error("Invalid email format!");

        const response = await axios.post(
          "http://localhost:3001/auth/login-user",
          { email: credential?.email, password: credential?.password }
        );

        if (!response?.data?.success)
          throw new Error(response?.data?.message[0]);
        const user = response?.data?.data;
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.token;
      session.user.id = token.id;
      session.user.userName = token.userName;

      return session;
    },
  },
});
