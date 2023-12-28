import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: "LlKq6ZtYbr+hTC073mAmdsde33h2HwMfsFo4hrfCx5mLg=",
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
