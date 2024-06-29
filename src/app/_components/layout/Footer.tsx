import Image from "next/image"
import Logo from "@/assets/logos/logo.png"
import Email from "@/assets/logos/email.png"
import Vector from "@/assets/logos/vector.png"

const Footer = () => {
  return (
    <div className="px-24 py-8 border-t border-[#FFFFFF0D]">
      <div className="flex justify-between border-b border-[#EFEFEF] pb-8">
        <Image src={Logo} alt="logo" width={144} className="!h-10 mt-8" />
        <div className="flex flex-col gap-2.5 mt-8">
          <h5 className="font-bold mb-2.5">Solutions</h5>
          <p className="text-sm">Browser</p>
          <p className="text-sm">Domains</p>
          <p className="text-sm">Wallet</p>
          <p className="text-sm">DAO</p>
        </div>
        <div className="flex flex-col gap-2.5 mt-8">
          <h5 className="font-bold mb-2.5">Community</h5>
          <p className="text-sm">X</p>
          <p className="text-sm">TG Announcement</p>
          <p className="text-sm">TG Group</p>
          <p className="text-sm">Discord</p>
          <p className="text-sm">Reddit</p>
          <p className="text-sm">Linkedin</p>
          <p className="text-sm">tomiArmy</p>
        </div>
        <div className="flex flex-col gap-2.5 mt-8">
          <h5 className="font-bold mb-2.5">Education</h5>
          <p className="text-sm">Blog</p>
          <p className="text-sm">Medium</p>
          <p className="text-sm">Youtube</p>
        </div>
        <div className="relative bg-gradient-to-b from-[#FF0083] to-[#171717] h-72 w-1/3 p-12">
          <div className="absolute bg-background top-px right-0 bottom-px left-px" />
          <div className="relative z-10 flex flex-col gap-2">
            <Image src={Email} alt="Email" width={55} />
            <h1 className="text-3xl font-bold mt-2">Email Us</h1>
            <p>
              Send your questions or suggestions <br />
              securely via our encrypted email for <br />
              prompt support and feedback.
            </p>
          </div>
          <Image src={Vector} alt="Vector" width={64} className="absolute right-0" />
        </div>
      </div>
      <div className="flex justify-between items-end px-2 pt-6 text-[#A5A5A5] text-sm">
        <p>&copy;2023 tomi, all rights reserved</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer