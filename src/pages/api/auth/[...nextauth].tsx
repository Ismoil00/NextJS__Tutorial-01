import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Providers are those websites that provide the services of signing in;
  providers: [
    // GitHub:
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // FaceBook:
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  // The below codes are done for database connection purposes!
  /* database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "fajdlfjqasldfgisnrgaedfkpgh",
  },
  callbacks: {
    async jwt(token:any, user:any) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session:any, token:any) {
      session.user.id = token.id
      return session;
    }
  } */
});
