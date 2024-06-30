import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import Image from "next/image"
import Close from "@/assets/logos/close-circle.png"

type ClaimRewardProps = {
  open: boolean
  setOpen: (open: boolean) => void
  setConfirm: (confirm: boolean) => void
}

const ClaimReward = ({ open, setOpen, setConfirm }: ClaimRewardProps) => {
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
              Claim Rewards
              <button onClick={() => setOpen(false)}>
                <Image src={Close} alt="close" width={24} height={24} />
              </button>
            </DialogTitle>
            <div className="flex flex-col w-full gap-8 mt-8 items-center">
              <div className="w-full rounded-2xl bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border flex flex-col items-center justify-between gap-4 p-8">
                <h5 className="text-secondary-foreground">Reward</h5>
                <p className="font-semibold text-4xl">1,000.54 TOMI</p>
              </div>
              <div className="font-medium text-xl">Are you sure you want to claim your rewards</div>
              <div className="flex items-center gap-2.5 w-full">
                <button
                  className="w-1/2 border border-primary rounded-lg p-4 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="w-1/2 bg-primary rounded-lg p-4 text-sm"
                  onClick={() => {
                    setConfirm(true)
                    setOpen(false)
                  }}
                >
                  Claim Rewards
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ClaimReward