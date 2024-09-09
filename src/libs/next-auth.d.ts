import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: {
      id: string;
      userName: string;
      email: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    userName: string;
    email: string;
    token: string;
  }
}
