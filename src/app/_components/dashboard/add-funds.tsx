import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Input,
} from "@headlessui/react"
import Image from "next/image"
import { useActiveAccount, useWalletBalance } from "thirdweb/react"
import { ethereum } from "thirdweb/chains"
import { thirdwebClient } from "@/utils/thirdweb-client"
import { TomiTokenAddress } from "@/utils/constant"
import Close from "@/assets/logos/close-circle.png"
import Tomi from "@/assets/logos/tomi.png"

type AddFundsProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const AddFunds = ({ open, setOpen }: AddFundsProps) => {
  const account = useActiveAccount()
  const { data: tokenData, isLoading, isError } = useWalletBalance({
    chain: ethereum,
    address: account?.address,
    client: thirdwebClient,
    tokenAddress: TomiTokenAddress,
  });

  return (
    <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={() => setOpen(false)}>
      <DialogBackdrop className="fixed inset-0 bg-background" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border-border"
          >
            <DialogTitle as="h3" className="flex items-center justify-between font-medium text-white text-lg p-5 border border-border rounded-lg">
              Add Funds
              <button onClick={() => setOpen(false)}>
                <Image src={Close} alt="close" width={24} height={24} />
              </button>
            </DialogTitle>
            <div className="flex flex-col mt-8 w-full gap-4">
              <div className="flex flex-col p-4 gap-4 w-full rounded-xl border border-border">
                <div className="rounded-md bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border flex items-center justify-between gap-8 p-4">
                  To create a deployment, you need to have at least 50 TOMI in an escrow account.
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border flex items-center justify-between gap-8 p-4">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-secondary-foreground text-md font-medium">Amount</h5>
                    <Input
                      type="number"
                      className="block w-full rounded-lg border-none bg-transparent py-1.5 text-2xl text-white focus:outline-none data-[focus]:outline-none"
                      defaultValue="50.00"
                      placeholder="50.00"
                      step="0.01"
                      min="50.00"
                    />
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <h5 className="text-primary text-md font-medium whitespace-nowrap">
                      {`Balance: ${parseFloat(tokenData?.displayValue || "0").toFixed(2)} ${tokenData?.symbol || "TOMI"}`}
                    </h5>
                    <div className="flex py-1.5 px-4 items-center justify-center gap-3 bg-select border border-select-border rounded-full">
                      <div className="bg-secondary rounded-full p-1">
                        <Image src={Tomi} alt="tomi" width={24} height={24} className="rounded-full" />
                      </div>
                      <span className="text-md">TOMI</span>
                    </div>
                  </div>
                </div>
                <button className="uppercase w-full text-sm p-4 bg-primary rounded-md">Buy Now</button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default AddFunds