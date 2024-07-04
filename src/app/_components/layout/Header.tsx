"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/tomi-runner.png"

const Header = () => {
  const [hash, setHash] = useState("home")

  return (
    <div className="fixed flex items-center justify-between bg-[#1010107F] px-24 py-4 w-full z-10">
      <Image src={Logo} alt="logo" width={128} height={24} />
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="px-4 py-1 w-[120px] h-[30px]"
          onClick={() => setHash("home")}
        >
          {hash === "home" ? "[ Home ]" : "Home"}
        </Link>
        <Link
          href="#features"
          className="px-4 py-1 w-[120px] h-[30px]"
          onClick={() => setHash("features")}
        >
          {hash === "features" ? "[ Features ]" : "Features"}
        </Link>
        <Link
          className="px-4 py-1 w-[120px] h-[30px]"
          href="#pricing"
          onClick={() => setHash("pricing")}
        >
          {hash === "pricing" ? "[ Pricing ]" : "Pricing"}
        </Link>
      </div>
      <div className="flex gap-4">
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
      </div>
    </div>
  )
}

export default Header
