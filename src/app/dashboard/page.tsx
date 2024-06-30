"use client"

import { useState } from "react"
import Image from "next/image"
import Github from "@/assets/logos/github-icon.png"
import Card from "../_components/dashboard/card"
import Percent1 from "@/assets/logos/percent1.png"
import Percent2 from "@/assets/logos/percent2.png"
import ClaimReward from "../_components/dashboard/claim-reward"
import ConfirmClaim from "../_components/dashboard/confirm-claim"
import AddFunds from "../_components/dashboard/add-funds"
import SuccessFunds from "../_components/dashboard/success-funds"

const Dashboard = () => {
  const [openReward, setOpenReward] = useState(false)
  const [openConfirmClaim, setOpenConfirmClaim] = useState(false)
  const [openAddFunds, setOpenAddFunds] = useState(false)
  const [openConfirmFunds, setOpenConfirmFunds] = useState(false)
  const [openSuccessFunds, setOpenSuccessFunds] = useState(false)


  return (
    <div className="flex flex-col px-24 py-14 gap-5">
      <Card className="flex w-full px-8 py-5 justify-between items-center">
        <div className="text-2xl font-semibold">Configure</div>
        <button className="flex items-center border border-border rounded-lg px-2.5 py-4 gap-2">
          <Image src={Github} alt="github" width={24} height={24} />
          <p className="text-sm">Add Github Repo</p>
        </button>
      </Card>


      <div className="flex w-full gap-5">
        <Card className="flex flex-col p-6 gap-8 w-3/5">
          <div className="h-1/6">
            <div className="text-2xl font-semibold">Current Quota</div>
            <p className="text-sm text-secondary-foreground mt-2.5">Here you can see your account's limits for AMD64 vCPUs and ARM vCPUs</p>
          </div>
          <div className="flex gap-5 h-5/6 w-full">
            <Card className="flex flex-col px-2 py-8 gap-6 items-center w-1/2">
              <div className="flex flex-col px-9 gap-2.5 items-center">
                <h3 className="font-light text-lg">Allowed Concurrent AMD64</h3>
                <Image src={Percent1} alt="percent" width={256} height={36} />
                <p className="text-sm">64 vCPUs</p>
              </div>
              <button className="px-20 py-4 border border-primary rounded-lg text-sm font-semibold">Buy more capacity</button>
            </Card>
            <Card className="flex flex-col px-2 py-9 gap-6 items-center w-1/2">
              <div className="flex flex-col px-9 gap-2.5 items-center">
                <h3 className="font-light text-lg">Free Compute Minutes</h3>
                <Image src={Percent2} alt="percent" width={256} height={36} />
                <p className="text-sm">3500 Minutes Used</p>
              </div>
              <button className="px-20 py-4 border border-primary rounded-lg text-sm font-semibold">Buy more capacity</button>
            </Card>
          </div>
        </Card>

        <Card className="flex flex-col p-6 gap-8 w-2/5">
          <div className="h-1/6">
            <div className="text-2xl font-semibold">Total Balance</div>
            <p className="text-sm text-secondary-foreground mt-2.5">Pay using our tomi token for better rates or use your credit card to get $TOMI</p>
          </div>
          <Card className="flex flex-col p-8 gap-6 h-5/6">
            <h4 className="font-light text-lg text-secondary-foreground">Balance</h4>
            <p className="text-4xl font-semibold">7,872.54 TOMI</p>
            <button
              className="px-28 py-5 border border-primary rounded-lg text-sm font-semibold"
              onClick={() => setOpenAddFunds(true)}
            >
              Add funds to your account
            </button>
          </Card>
        </Card>
      </div>


      <div className="flex w-full gap-5">
        <Card className="flex w-1/2 items-center justify-between p-8">
          <div>
            <h3 className="text-2xl font-semibold">Become a Node Operator</h3>
            <p className="text-sm text-secondary-foreground mt-2.5">Get Rewarded For Providing Compute Resources</p>
          </div>
          <div className="flex gap-2.5">
            <button className="bg-primary rounded-lg px-2.5 py-3.5 text-sm font-semibold">Become a Provider</button>
            <button className="border border-border rounded-lg px-2.5 py-3.5 text-sm font-semibold">Refer a Friend</button>
          </div>
        </Card>

        <Card className="flex w-1/2 items-center justify-between p-8">
          <div>
            <h3 className="text-2xl font-semibold">1,000 TOMI Tokens</h3>
            <p className="text-sm text-secondary-foreground mt-2.5">Node Operator's Rewards</p>
          </div>
          <button
            className="bg-primary rounded-lg px-2.5 py-3.5 text-sm font-semibold"
            onClick={() => setOpenReward(true)}
          >
            Claim Rewards
          </button>
        </Card>
      </div>

      <Card className="flex flex-col gap-6 p-6 mb-8">
        <div>
          <h3 className="text-2xl font-semibold">Upcoming Usage Invoice</h3>
          <p className="text-sm text-secondary-foreground mt-2.5">Billing period: May 4, 2024 - June 4, 2024. Concurrency extensions are not reflected in this table.</p>
        </div>

        <div className="border border-border rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-1/6">Runner</th>
                <th className="w-1/6">Minutes</th>
                <th className="uppercase w-2/6">Unit Price</th>
                <th className="uppercase w-2/6 border-l border-border">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 vCPU</td>
                <td>97 minutes</td>
                <td>US$ 0.00</td>
                <td className="border-l border-border">US$ 0.39</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td className="border-l border-border">US$ 0.39</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Provider Discount</td>
                <td className="border-l border-border">US$ 0.39</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td className="border-l border-border">US$ 0.39</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Applied balance</td>
                <td className="border-l border-border">US$ 0.39</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Est. Amount due</td>
                <td className="border-l border-border">US$ 0.39</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>


      <ClaimReward open={openReward} setOpen={setOpenReward} setConfirm={setOpenConfirmClaim} />
      <ConfirmClaim open={openConfirmClaim} setOpen={setOpenConfirmClaim} />
      <AddFunds open={openAddFunds} setOpen={setOpenAddFunds} />
      <SuccessFunds open={openSuccessFunds} setOpen={setOpenSuccessFunds} />
    </div>
  )
}

export default Dashboard