import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
    // EmailProvider({
    //     server: process.env.EMAIL_SERVER,
    //     from: process.env.EMAIL_FROM,
    //     // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    //   }),
  ],
  //a database is optional, but required to persist accounts in a databse.
  //database: process.env.DATABASE_URL
  secret: process.env.NEXTAUTH_SECRET,
})