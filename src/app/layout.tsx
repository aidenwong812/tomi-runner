import "@/styles/globals.css"
import 'react-toastify/dist/ReactToastify.css';

import { Inter } from "next/font/google"
import Image from "next/image"
import { AutoConnect, ThirdwebProvider } from "thirdweb/react"
import { createWallet } from "thirdweb/wallets";
import { ToastContainer } from 'react-toastify';

import { TRPCReactProvider } from "@/trpc/react"
import { thirdwebClient } from "@/utils/thirdweb-client";
import Background from "@/assets/images/background.png"
import Header from "./_components/layout/Header"
import Footer from "./_components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Tomi Runner",
  description: "Tomi Runner",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-background py-5 relative`}>
        <ThirdwebProvider>
          <TRPCReactProvider>
            <Image src={Background} alt="background" className="absolute top-0 left-0 w-full -z-10" />
            <Header />
            {children}
            <Footer />
            <AutoConnect client={thirdwebClient} wallets={wallets} appMetadata={appMetadata} />
            <ToastContainer autoClose={3000} newestOnTop theme="dark" />
          </TRPCReactProvider>
        </ThirdwebProvider>
      </body>
    </html>
  )
}
