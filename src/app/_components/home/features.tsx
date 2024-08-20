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
import Azure from "@/assets/logos/azure.png"
import BitBucket from "@/assets/logos/bitbucket.png"
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
        <div className="border-2 border-[#3E3E3E] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="rounded-lg">
              <tr className="border-b-2 border-[#3E3E3E]">
                <th className="text-base p-6 pl-12">Configuration</th>
                <th className="p-6 border-x-2 border-[#3E3E3E]">
                  <div className="flex justify-center">
                    <Image src={Azure} alt="azure" width={140} height={32} />
                  </div>
                </th>
                <th className="p-6 border-x-2 border-[#3E3E3E]">
                  <div className="flex justify-center">
                    <Image src={BitBucket} alt="bitbucket" width={130} height={32} />
                  </div>
                </th>
                <th className="p-6 border-x-2 border-[#3E3E3E]">
                  <div className="flex justify-center">
                    <Image src={Github} alt="github" width={110} height={32} />
                  </div>
                </th>
                <th className="p-6 bg-gradient-to-t from-[#FF008309] to-[#FF008300]">
                  <div className="flex justify-center">
                    <Image src={Tomi} alt="Tomi" width={130} height={32} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="rounded-b">
              <tr className="border-b-2 border-[#3E3E3E]">
                <td className="text-base p-6 pl-12">Free Minutes</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">1800 Minutes</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">50 Minutes</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">2000 Minutes</td>
                <td className="text-base p-6 text-center bg-gradient-to-t from-[#FF008314] to-[#FF008309] text-[#00FF19]">4000 Minutes</td>
              </tr>
              <tr className="border-b-2 border-[#3E3E3E]">
                <td className="text-base p-6 pl-12">Linux 2 vCPU | 8 GB</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.008 / MIN</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.008 / MIN</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.008 / MIN</td>
                <td className="text-base p-6 text-center bg-gradient-to-t from-[#FF008319] to-[#FF008314] text-[#00FF19]">$0.004 / MIN</td>
              </tr>
              <tr className="border-b-2 border-[#3E3E3E]">
                <td className="text-base p-6 pl-12">Linux 4 vCPU | 16 GB</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.0016 / MIN</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.016 / MIN</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.016 / MIN</td>
                <td className="text-base p-6 text-center bg-gradient-to-t from-[#FF008324] to-[#FF008319] text-[#00FF19]">$0.006 / MIN</td>
              </tr>
              <tr>
                <td className="text-base p-6 pl-12">Linux 8 vCPU | 32 GB</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.032 / MIN</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.032 / MIN</td>
                <td className="text-base p-6 text-center border-x-2 border-[#3E3E3E] text-[#FF4A4A]">$0.032 / MIN</td>
                <td className="text-base p-6 text-center bg-gradient-to-t from-[#FF008329] to-[#FF008324] text-[#00FF19]">$0.012 / MIN</td>
              </tr>
            </tbody>
          </table>
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