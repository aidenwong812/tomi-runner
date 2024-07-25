import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/tomi-runner.png"
import { auth } from "@/utils/auth"
import HeaderList from "./header-list"

const Header = async () => {
  const session = await auth()

  return (
    <div className="fixed flex items-center justify-between bg-[#1010107F] px-24 py-4 w-full z-10 max-w-[1920px]">
      <Link href="/">
        <Image src={Logo} alt="logo" width={128} height={24} />
      </Link>

      <HeaderList user={session?.user?.id ?? ""} />

    </div>
  )
}

export default Header
