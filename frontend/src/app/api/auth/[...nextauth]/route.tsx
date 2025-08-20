import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add this in .env
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
