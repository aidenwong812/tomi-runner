"use client"

import { thirdwebClient } from "@/utils/thirdweb-client"
import { AutoConnect } from "thirdweb/react"
import { createWallet } from "thirdweb/wallets"

const wallets = [
  createWallet("com.tomi"),
  createWallet("io.metamask"),
  createWallet("walletConnect"),
]

const appMetadata = {
  name: "Tomi Runner",
  description: "Deploy CI/CD GitHub Actions workflows to Decentralized physical infrastructure network (DePIN)",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  logoUrl: "/favicon.ico",
}

const AutoWalletConnect = () => {
  return (
    <AutoConnect
      client={thirdwebClient}
      wallets={wallets}
      appMetadata={appMetadata}
    />
  )
}

export default AutoWalletConnect
