
import NextAuth from "next-auth";

import type { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
// import CredentialsProvider from "next-auth/providers/credentials";

export const OPTIONS: NextAuthOptions = {
    providers: [
        // CredentialsProvider({
        //     id: "crypto",
        //     name: "Crypto Wallet Auth",
        //     credentials: {
        //         publicAddress: { label: "Public Address", type: "text" },
        //         signedNonce: { label: "Signed Nonce", type: "text" },
        //     },
        //     authorize: authenticate,
        //     }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
            version: "2.0",
            // authorization: {
            //     params: {
            //         scope:
            //         'offline.access like.read follows.read tweet.read users.read tweet.write follows.write',
            //     },
            // },
        }),
    ],
    pages: {
      signIn: "",
      signOut: "",
    },
    callbacks: {
        // async session(session, user) {
        //     session.user.id = user.id;
        //     return session;
        // },
        // async jwt(token, user, account, profile, isNewUser) {
        //     if (user) {
        //         token.id = user.id;
        //     }
        //     return token;
        // },
        
    },
  session: {
    strategy: "jwt",
    },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET as string,
  },
};

const handler = NextAuth(OPTIONS);

export {handler as GET,handler as POST}