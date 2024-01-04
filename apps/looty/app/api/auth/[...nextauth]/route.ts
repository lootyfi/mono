import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import TwitterProvider from "next-auth/providers/twitter";
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
          
          if (data.tokens.access_token) {
            return data;
          }
          return null;
        }
      }),
    TwitterProvider({
    clientId: process.env.TWITTER_CLIENT_ID as string,
    clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
     version: "2.0", // opt-in to Twitter OAuth 2.0
  })
  ],
  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.address = token.sub;
      session.user.token = token;
      return session;
    },
  },
};

const handler = NextAuth(OPTIONS);

export {handler as GET,handler as POST}
