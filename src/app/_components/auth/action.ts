"use server"

import { signIn, signOut } from "@/utils/auth"

export const handleSignIn = async (type: string) => {
  await signIn(type, {
    redirectTo: "/dashboard",
  })
}

export const handleSignOut = async () => {
  await signOut({
    redirect: true,
    redirectTo: "/",
  })
}