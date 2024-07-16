import Image from "next/image"

import Workflow1 from "@/assets/images/workflow1.png"
import Workflow2 from "@/assets/images/workflow2.png"

const Banner = () => {
  return (
    <div className="flex px-24 2xl:px-32 py-32 w-full justify-between items-center">
      <div className="w-1/2 flex flex-col gap-4">
        <div className="uppercase text-sm">over <span className="text-xl">60%</span> cheaper than github actions</div>
        <div className="flex flex-col gap-2">
          <h2 className="uppercase text-[40px] font-medium">Keep Github Actions,</h2>
          <h1 className="uppercase text-6xl font-medium">Ditch Their Runners.</h1>
          <p className="mt-5 opacity-80 text-base">Deploy CI/CD GitHub Actions workflows to Decentralized physical <br />infrastructure network (DePIN)</p>
          <p className="text-2xl font-bold mt-1">4,000 Free Monthly! <span className="text-lg text-primary">Compute minutes.</span></p>
        </div>
        <div className="flex text-sm gap-4 mt-8">
          <button className="uppercase bg-secondary border border-primary rounded-md py-4 px-8">Start For Free</button>
          <button className="uppercase rounded-md py-4 px-8">[ Documentation ]</button>
        </div>
      </div>
      <div className="w-1/2 p-9 pr-0 max-w-[600px]">
        <div className="relative h-72">
          <Image src={Workflow1} alt="workflow" className="w-full absolute" />
          <Image src={Workflow2} alt="workflow" className="w-full absolute -top-4" />
        </div>
        <p className="text-center">Only 1 line change in your workflow file</p>
      </div>
    </div>
  )
}

export default Banner