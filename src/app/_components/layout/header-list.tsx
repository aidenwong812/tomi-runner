"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";

import WalletConnect from "@/app/_components/auth/wallet-connect";
import User from "@/assets/logos/user.png"
import ArrowDown from "@/assets/logos/arrow-down.png"
import { formatAddress } from "@/utils/formatAddress";
import { handleSignOut } from "../auth/action"

const HeaderList = ({ user }: { user: string }) => {
  const [hash, setHash] = useState("home")
  const [openModal, setOpenModal] = useState(false)
  const account = useActiveAccount()
  console.log(account)

  return (
    <>
      {
        user ? (
          <div></div>
        ) : (
          <div className="flex items-center justify-center gap-5">
            <Link
              href="/"
              className="px-4 py-1 w-[120px] h-[30px] text-center"
              onClick={() => setHash("home")}
            >
              {hash === "home" ? "[ Home ]" : "Home"}
            </Link>
            <Link
              href="#features"
              className="px-4 py-1 w-[120px] h-[30px] text-center"
              onClick={() => setHash("features")}
            >
              {hash === "features" ? "[ Features ]" : "Features"}
            </Link>
            <Link
              className="px-4 py-1 w-[120px] h-[30px] text-center"
              href="#pricing"
              onClick={() => setHash("pricing")}
            >
              {hash === "pricing" ? "[ Pricing ]" : "Pricing"}
            </Link>
          </div>
        )
      }

      <div className="flex gap-4">
        {
          user ? (
            <>
              <Link
                className="transition-colors ease-in-out duration-300 px-4 py-2 rounded-lg hover:bg-primary"
                href="/dashboard"
              >
                Dashboard
              </Link>
              {
                account ? (
                  <button
                    className="flex items-center gap-2.5 p-2.5 border border-border rounded-lg"
                  >
                    <Image src={User} alt="user" width={22} height={22} />
                    <p className="text-sm">{formatAddress(account.address)}</p>
                    <Image src={ArrowDown} alt="arrowdown" width={20} height={20} />
                  </button>
                ) : (
                  <button
                    className="uppercase transition-colors ease-in-out duration-300 px-4 py-2 border border-primary rounded-lg hover:bg-primary"
                    onClick={() => setOpenModal(true)}
                  >
                    Web3 Wallet
                  </button>
                )
              }
              <button
                className="transition-colors ease-in-out duration-300 px-4 py-2 border rounded-lg border-border hover:bg-transparent text-sm"
                onClick={() => handleSignOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                className="transition-colors ease-in-out duration-300 px-4 py-2 rounded-lg hover:bg-primary"
                href="/auth/signup"
              >
                Sign Up
              </Link>
              <Link
                className="transition-colors ease-in-out duration-300 px-4 py-2 border rounded-lg border-primary hover:bg-primary"
                href="/auth/login"
              >
                Log In
              </Link>
            </>
          )
        }
      </div>

      <WalletConnect open={openModal} setOpen={setOpenModal} />
    </>
  )
}

export default HeaderList