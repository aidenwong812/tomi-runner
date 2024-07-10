import prismaClient from "@/utils/prisma-client"
import { Prisma } from "@prisma/client"
import { Adapter, AdapterAccount } from "next-auth/adapters"

export const adapter: Adapter = {
  createUser: (data) => {
    return prismaClient.user.create({ data })
  },
  getUser: (id) => {
    return prismaClient.user.findUnique({ where: { id } })
  },
  getUserByEmail: (email) => {
    return prismaClient.user.findUnique({ where: { email } })
  },
  getUserByAccount: async (provider_providerAccountId) => {
    const account = await prismaClient.account.findUnique({
      where: { provider_providerAccountId },
      select: { user: true },
    })
    return account?.user ?? null
  },
  updateUser: ({ id, ...data }) => {
    return prismaClient.user.update({ where: { id }, data })
  },
  deleteUser: (id) => {
    return prismaClient.user.delete({ where: { id } })
  },
  linkAccount: (data) => {
    return prismaClient.account.create({ data }) as unknown as AdapterAccount
  },
  getSessionAndUser: async (sessionToken) => {
    const userAndSession = await prismaClient.session.findUnique({
      where: { sessionToken },
      include: { user: true },
    })
    if (!userAndSession) return null
    const { user, ...session } = userAndSession
    return { user, session }
  },
  createSession: (data) => {
    return prismaClient.session.create({ data })
  },
  updateSession: (data) => {
    return prismaClient.session.update({
      where: { sessionToken: data.sessionToken },
      data,
    })
  },
  deleteSession: (sessionToken) => {
    return prismaClient.session.delete({ where: { sessionToken } })
  },
  createVerificationToken: async (data) => {
    return prismaClient.token.create({ data: { userId: data.identifier, type: "verificationToken", ...data } })
  },
  useVerificationToken: (identifier_token) => {
    try {
      return prismaClient.token.delete({
        where: { identifier_token },
      })
    } catch (error) {
      // If token already used/deleted, just return null
      // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
      if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025")
        return null
      throw error
    }
  },
}
