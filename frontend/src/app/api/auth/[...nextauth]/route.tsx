import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "428014166226-amq98fb1t1fd4vi62sqf18q749pblbvi.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add this in .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
