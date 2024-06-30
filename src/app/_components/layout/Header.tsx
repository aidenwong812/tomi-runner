import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/tomi-runner.png"

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#1010107F] px-24 py-4">
      <Image src={Logo} alt="logo" width={128} height={24} />
      <ul className="flex items-center gap-5">
        <li className="px-4 py-1 w-[104px] h-[30px]">[ Home ]</li>
        <li className="px-4 py-1 w-[104px] h-[30px]">Features</li>
        <li className="px-4 py-1 w-[104px] h-[30px]">Pricing</li>
      </ul>
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
