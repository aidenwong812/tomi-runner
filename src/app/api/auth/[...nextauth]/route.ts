import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || '',
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
