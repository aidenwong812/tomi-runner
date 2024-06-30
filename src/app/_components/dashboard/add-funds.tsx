import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import Image from "next/image"
import Close from "@/assets/logos/close-circle.png"
import ArrowUpRight from "@/assets/logos/Arrow_Up_Right.png"
import Exchange from "@/assets/logos/exchange.png"

type AddFundsProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const AddFunds = ({ open, setOpen }: AddFundsProps) => {
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
                  <div className="flex flex-col gap-2">
                    <h5 className="text-secondary-foreground text-sm">You Spend</h5>
                    <p className="text-secondary-foreground text-3xl font-medium">0.00</p>
                  </div>
                  <Image src={ArrowUpRight} alt="arrow" width={24} height={24} />
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border flex items-center justify-between gap-8 p-4">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-secondary-foreground text-sm">You Receive</h5>
                    <p className="text-secondary-foreground text-3xl font-medium">0.00</p>
                  </div>
                  <Image src={ArrowUpRight} alt="arrow" width={24} height={24} />
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border flex items-center justify-between gap-8 p-4">
                  <div className="text-sm text-secondary-foreground">
                    Estimated price: 0.00001 ETH ~ 1 TOMI
                  </div>
                  <Image src={Exchange} alt="exchange" width={20} height={20} />
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