import "@/styles/globals.css"

import { Inter } from "next/font/google"
import Image from "next/image"
import { ThirdwebProvider } from "thirdweb/react"

import { TRPCReactProvider } from "@/trpc/react"
import Header from "./_components/layout/Header"
import Background from "@/assets/images/background.png"
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
          </TRPCReactProvider>
        </ThirdwebProvider>
      </body>
    </html>
  )
}
