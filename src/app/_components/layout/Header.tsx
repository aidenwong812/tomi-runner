import Image from "next/image"
import Logo from "@/assets/logos/tomi-runner.png"

const   Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#1010107F] px-5 py-4">
      <Image src={Logo} alt="logo" width={128} height={24} />
      <ul className="flex items-center gap-5">
        <li className="px-4 py-1 w-[104px] h-[30px]">[ Home ]</li>
        <li className="px-4 py-1 w-[104px] h-[30px]">Features</li>
        <li className="px-4 py-1 w-[104px] h-[30px]">Pricing</li>
      </ul>
      <div className="flex gap-4">
        <button className="transition-colors ease-in-out duration-300 px-4 py-2 rounded-lg hover:bg-primary">Sign Up</button>
        <button className="transition-colors ease-in-out duration-300 px-4 py-2 border rounded-lg border-border hover:bg-primary">Log In</button>
      </div>
    </div>
  )
}

export default Header