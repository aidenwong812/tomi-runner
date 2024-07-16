import Image from "next/image"
import Card from "./card"
import Security from "@/assets/logos/security.png"
import Encrypt from "@/assets/logos/encrypt.png"
import Clock from "@/assets/logos/clock.png"
import Star from "@/assets/logos/star.png"
import Rocket from "@/assets/logos/rocket.png"
import Eco from "@/assets/logos/eco.png"
import Github from "@/assets/logos/github.png"
import Tomi from "@/assets/logos/tomi-runner.png"
import Export from "@/assets/logos/export.png"

const Features = () => {
  return (
    <div id="features" className="flex flex-col justify-center border-t border-[#FFFFFF0D] px-24 2xl:px-32 py-28">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="font-semibold text-5xl text-center">Features</h1>
        <div className="grid grid-cols-3 gap-2.5">
          <Card icon={Security} title="Isolated VM" description="Achieve optimal security and performance." />
          <Card icon={Encrypt} title="Encrypted Connection" description="Protect your data with robust encryption." />
          <Card icon={Clock} title="1-Minute Setup" description="Get started quickly with a simple setup." />
          <Card icon={Star} title="4000/mo minutes for FREE" description="Enjoy build time at no cost." />
          <Card icon={Rocket} title="Double the Memory of Github Runners" description="Benefit from increased memory capacity." />
          <Card icon={Eco} title="Eco-Friendly" description="A sustainable and green infrastructure." />
        </div>
      </div>
      
      
      <div id="pricing" className="flex flex-col justify-center gap-8">
        <h1 className="font-semibold text-5xl text-center mt-28">PRICING</h1>
        <div className="grid grid-cols-4 border-2 border-[#3E3E3E] rounded-lg items-center justify-center">
          <div className="col-span-2">
            <div className="p-6 pl-16 w-full">
              <p className="flex items-center h-[32px]">Configuration</p>
            </div>
            <div className="p-6 pl-16 w-full border-t-2 border-[#3E3E3E]">Linux 2 vCPU | 8 GB</div>
            <div className="p-6 pl-16 w-full border-t-2 border-[#3E3E3E]">Linux 4 vCPU | 16 GB</div>
            <div className="p-6 pl-16 w-full border-t-2 border-[#3E3E3E]">Linux 8 vCPU | 32 GB</div>
          </div>
          <div className="border-l-2 border-r-2 border-[#3E3E3E]">
            <div className="flex justify-center p-6 w-full">
              <Image src={Github} alt="github" width={120} height={32} />
            </div>
            <div className="p-6 w-full text-center text-[#FF4A4A] border-t-2 border-[#3E3E3E]">$0.008 / MIN</div>
            <div className="p-6 w-full text-center text-[#FF4A4A] border-t-2 border-[#3E3E3E]">$0.016 / MIN</div>
            <div className="p-6 w-full text-center text-[#FF4A4A] border-t-2 border-[#3E3E3E]">$0.032 / MIN</div>
          </div>
          <div className="bg-gradient-to-t from-[#FF008329] to-[#FF008300]">
            <div className="flex justify-center p-6 w-full">
              <Image src={Tomi} alt="Tomi" width={150} height={32} />
            </div>
            <div className="p-6 w-full text-center border-t-2 border-[#3E3E3E]">$0.004 / MIN</div>
            <div className="p-6 w-full text-center border-t-2 border-[#3E3E3E]">$0.006 / MIN</div>
            <div className="p-6 w-full text-center border-t-2 border-[#3E3E3E]">$0.012 / MIN</div>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center mt-16 gap-4">
        <div className="font-normal text-sm rounded-full bg-border px-2 py-0.5">Did you know?</div>
        <div className="font-medium text-5xl">20% less</div>
        <div className="text-xl">For tomi token holders</div>
        <button className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg border border-primary">
          <div className="uppercase">Get Tomi Tokens</div>
          <Image src={Export} alt="export" width={16} height={16} />
        </button>
      </div>
    </div>
  )
}

export default Features