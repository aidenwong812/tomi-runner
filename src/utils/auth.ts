import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { ethers } from "ethers"
import { adapter } from "./adapter"
import prismaClient from "./prisma-client"

const authOptions = {
  adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || '',
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, req) => {
        if (!credentials.email) {
          return null
        }
        const user = await prismaClient.user.findUnique({ where: { email: credentials.email.toString() } });
        if (!user) {
          const wallet = ethers.Wallet.createRandom();
          const newUser = await prismaClient.user.create({
            data: {
              email: credentials.email.toString(),
              emailVerified: null,
              pubKey: wallet.address,
              priKey: wallet.privateKey,
            }
          });
          return newUser;
        }
        return user;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET || '',
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user?: {
      emailVerified: Date | null
      password: string | null
      isDeleted: boolean
      balance: number
      pubKey: string
      prikey: string
    } & DefaultSession["user"]
  }
}
