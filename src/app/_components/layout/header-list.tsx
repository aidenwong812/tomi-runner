"use client"

import React, { useState } from "react"
import Link from "next/link"
import { handleSignOut } from "../auth/action"

const HeaderList = ({ user }: { user: string }) => {
  const [hash, setHash] = useState("home")

  return (
    <>
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

      <div className="flex gap-4">
        {
          user ? (
            <>
              <button
                className="transition-colors ease-in-out duration-300 px-4 py-2 border rounded-lg border-primary hover:bg-primary"
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
    </>
  )
}

export default HeaderList