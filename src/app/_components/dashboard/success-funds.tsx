import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import Image from "next/image"
import Close from "@/assets/logos/close-circle.png"
import Success from "@/assets/logos/success.png"

type SuccessFundsProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SuccessFunds = ({ open, setOpen }: SuccessFundsProps) => {
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
            <div className="flex flex-col w-full gap-8 mt-8 items-center">
              <Image src={Success} alt="Success" width={200} height={200} />
              <div className="font-medium text-xl">Funds successfully added to your account</div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default SuccessFunds