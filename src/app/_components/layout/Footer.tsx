import Image from "next/image"
import Link from "next/link"
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
          <Link href="https://tomi.com/browser" className="text-sm" target="_blank">Browser</Link>
          <Link href="https://domains.tomi.com" className="text-sm" target="_blank">Domains</Link>
          <Link href="https://tomi.com/wallet" className="text-sm" target="_blank">Wallet</Link>
          <Link href="https://dao.tomi.com" className="text-sm" target="_blank">DAO</Link>
        </div>
        <div className="flex flex-col gap-2.5 mt-8">
          <h5 className="font-bold mb-2.5">Community</h5>
          <Link href="https://twitter.com/tomipioneers" className="text-sm" target="_blank">X</Link>
          <Link href="https://t.me/tomipioneers" className="text-sm" target="_blank">TG Announcement</Link>
          <Link href="https://t.me/tomi_official_chat" className="text-sm" target="_blank">TG Group</Link>
          <Link href="https://discord.com/invite/tomipioneers" className="text-sm" target="_blank">Discord</Link>
          <Link href="https://www.reddit.com/r/tomipioneers/?rdt=51853" className="text-sm" target="_blank">Reddit</Link>
          <Link href="" className="text-sm" target="_blank">Linkedin</Link>
          <Link href="https://tomiarmy.com" className="text-sm" target="_blank">tomiArmy</Link>
        </div>
        <div className="flex flex-col gap-2.5 mt-8">
          <h5 className="font-bold mb-2.5">Education</h5>
          <Link href="https://tomi.com/news" className="text-sm" target="_blank">Blog</Link>
          <Link href="https://medium.com/tomipioneers" className="text-sm" target="_blank">Medium</Link>
          <Link href="https://www.youtube.com/@tomipioneers" className="text-sm" target="_blank">Youtube</Link>
        </div>
        <div className="relative bg-gradient-to-b from-[#FF0083] to-[#171717] h-72 w-1/3 p-12">
          <div className="absolute bg-background top-px right-0 bottom-px left-px" />
          <div className="relative z-10 flex flex-col gap-2">
            <Link href="mailto:tomiteam@proton.me">
              <Image src={Email} alt="Email" width={55} />
            </Link>
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