import NextAuth, { DefaultSession, NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"
import Credentials from "next-auth/providers/credentials"
import axios from "axios"
import { ethers } from "ethers"
import { adapter } from "./adapter"
import prismaClient from "./prisma-client"

const authOptions = {
  adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    MicrosoftEntraID({
      clientId: process.env.MICROSOFT_ENTRA_ID_ID || '',
      clientSecret: process.env.MICROSOFT_ENTRA_ID_SECRET || '',
      tenantId: process.env.MICROSOFT_ENTRA_ID_TENANT_ID || '',
    }),
    // {
    //   id: "bitbucket",
    //   name: "Bitbucket",
    //   type: "oauth",
    //   authorization: {
    //     url: `https://bitbucket.org/site/oauth2/authorize`,
    //     params: {
    //       scope: "email account",
    //       response_type: "code",
    //     },
    //   },
    //   token: `https://bitbucket.org/site/oauth2/access_token`,
    //   userinfo: {
    //     request: ({ tokens }: any) =>
    //       axios
    //         .get("https://api.bitbucket.org/2.0/user", {
    //           headers: {
    //             Authorization: `Bearer ${tokens.access_token}`,
    //             Accept: "application/json",
    //           },
    //         })
    //         .then((r) => r.data),
    //   },
    //   async profile(profile: BitbucketProfile, tokens) {
    //     const email = await axios
    //       .get<BitbucketEmailsResponse>(
    //         "https://api.bitbucket.org/2.0/user/emails",
    //         {
    //           headers: {
    //             Authorization: `Bearer ${tokens.access_token}`,
    //             Accept: "application/json",
    //           },
    //         }
    //       )
    //       .then(
    //         (r) =>
    //           // find the primary email, or the first available email
    //           (r.data.values.find((value) => value.is_primary) || r.data.values[0])?.email
    //       );

    //     return {
    //       ...profile,
    //       id: profile.account_id,
    //       email,
    //       image: profile.links.avatar.href,
    //       name: profile.display_name,
    //     };
    //   },
    //   clientId: process.env.BITBUCKET_ID,
    //   clientSecret: process.env.BITBUCKET_SECRET,
    // },
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

export interface BitbucketProfile {
  display_name: string;
  links: BitbucketProfileLinks;
  created_on: Date;
  type: string;
  uuid: string;
  has_2fa_enabled: null;
  username: string;
  is_staff: boolean;
  account_id: string;
  nickname: string;
  account_status: string;
  location: null;
}

export interface BitbucketProfileLinks {
  self: BitbucketAvatarResource;
  avatar: BitbucketAvatarResource;
  repositories: BitbucketAvatarResource;
  snippets: BitbucketAvatarResource;
  html: BitbucketAvatarResource;
  hooks: BitbucketAvatarResource;
}

export interface BitbucketAvatarResource {
  href: string;
}

export interface BitbucketEmailsResponse {
  values: BitbucketEmailResource[];
  pagelen: number;
  size: number;
  page: number;
}

export interface BitbucketEmailResource {
  type: string;
  links: null[];
  email: string;
  is_primary: boolean;
  is_confirmed: boolean;
}
