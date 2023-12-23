import type { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const options: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
    ],
    pages: {
      signIn:"/mint",
    },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET as string,
  },
};