
import NextAuth from "next-auth";

import type { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const OPTIONS: NextAuthOptions = {
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID as string,
            clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/",
    },
    callbacks: {
      async(params) {
            console.log(params,"params")
            
            return params.baseUrl
        },
      async jwt(params) {
          console.log(params)

          return ""
      },  
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