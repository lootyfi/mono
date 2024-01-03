import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const OPTIONS: NextAuthOptions = {
    providers: [
      CredentialsProvider({
      id: "web3",
      name: "web3",
      credentials: {
        message: { label: "Message", type: "text" },
        signedMessage: { label: "Signed Message", type: "text" },
        nonce: { label: "Nonce", type: "text" },
        wallet: { label: "Wallet", type: "text" },
        unixTimestamp: { label: "Unix Timestamp", type: "text" },
      },
        async authorize(credentials: any) {
          const response = await fetch(`${process.env.API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              wallet: credentials.wallet,
              message: credentials.message,
              signedMessage: credentials.signedMessage,
              nonce: credentials.nonce,
              unixTimestamp: Number(credentials.unixTimestamp),
            }),
          });
          const data = await response.json();
          console.log("data", data.tokens.access_token);
          
          if (data.tokens.access_token) {
            return data;
          }
          return null;
        }
    }),
  ],
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      console.log("session", session);
      console.log("token", token);
      
      session.user.address = token.sub;
      session.user.token = token;
      return session;
    },
  },
  // pages: {
  //   signIn:"/auth"
  // },
};

const handler = NextAuth(OPTIONS);

export {handler as GET,handler as POST}