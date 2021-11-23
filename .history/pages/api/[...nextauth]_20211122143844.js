import NextAuth from "next-auth"
import providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    providers.g({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
      signIn:'/auth/signin'
  }
})