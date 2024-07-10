import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/tomi-runner.png"
import HeaderList from "./header-list"
import { auth } from "@/utils/auth"
import { handleSignOut } from "../auth/action"

const Header = async () => {
  const session = await auth()
  
  return (
    <div className="fixed flex items-center justify-between bg-[#1010107F] px-24 py-4 w-full z-10">
      <Image src={Logo} alt="logo" width={128} height={24} />

      <HeaderList user={session?.user?.id ?? ""} />

    </div>
  )
}

export default Header
