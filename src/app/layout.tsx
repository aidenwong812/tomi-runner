import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { ThirdwebProvider } from "./thirdweb";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SlickCI",
  description: "Generated for EthGlobal Sydney",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} min-h-screen flex flex-col justify-between bg-primary-200`}>
        <TRPCReactProvider>
          <div className="bg-primary-200 p-2 border-b border-dashed border-bg-100">
            <div className="container mx-auto text-text-100">
            SlickCI
            </div>
          </div>
          <ThirdwebProvider>
          {children}
          </ThirdwebProvider>
          <div className="container">
            
          </div>
          </TRPCReactProvider>
      </body>
    </html>
  );
}
