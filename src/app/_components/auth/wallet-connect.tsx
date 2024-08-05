import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useConnect } from "thirdweb/react"
import { createWallet, injectedProvider } from "thirdweb/wallets"

import { thirdwebClient } from "@/utils/thirdweb-client"
import Close from "@/assets/logos/close-circle.png"
import ArrowUpRight from "@/assets/logos/Arrow_Up_Right.png"
import Tomi from "@/assets/logos/tomi.png"
import Metamask from "@/assets/logos/metamask.png"
import ConnectWallet from "@/assets/logos/connectwallet.png"

type WalletConnectProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const WalletConnect = ({ open, setOpen }: WalletConnectProps) => {
  const { connect, isConnecting, error } = useConnect();
  const router = useRouter()

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
              Connect Your Wallet
              <button onClick={() => setOpen(false)}>
                <Image src={Close} alt="close" width={24} height={24} />
              </button>
            </DialogTitle>
            <div className="flex flex-col mt-8 w-full gap-4">
              <div
                className="rounded-2xl bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border hover:border-primary flex items-center justify-between gap-8 p-8 cursor-pointer"
                onClick={() =>
                  connect(async () => {
                    const tomiPAY = createWallet("com.tomi") // pass the wallet id

                    // if user has tomiPAY installed, connect to it
                    if (injectedProvider("com.tomi")) {
                      const { address } = await tomiPAY.connect({ client: thirdwebClient })
                      if (address) {
                        setOpen(false)
                        router.push("/dashboard")
                      }
                    }

                    // open wallet connect modal so user can scan the QR code and connect
                    else {
                      await tomiPAY.connect({
                        client: thirdwebClient,
                        walletConnect: { showQrModal: true },
                      })
                    }

                    // return the wallet
                    return tomiPAY
                  })
                }
              >
                <div className="flex items-center gap-5">
                  <Image src={Tomi} alt="tomi" width={30} height={28} />
                  <p>tomi Wallet</p>
                </div>
                <Image src={ArrowUpRight} alt="arrow" width={24} height={24} />
              </div>
              <div
                className="rounded-2xl bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border hover:border-primary flex items-center justify-between gap-8 p-8 cursor-pointer"
                onClick={() =>
                  connect(async () => {
                    const metamask = createWallet("io.metamask") // pass the wallet id

                    // if user has metamask installed, connect to it
                    if (injectedProvider("io.metamask")) {
                      const { address } = await metamask.connect({ client: thirdwebClient })
                      if (address) {
                        setOpen(false)
                        router.push("/dashboard")
                      }
                    }

                    // open wallet connect modal so user can scan the QR code and connect
                    else {
                      await metamask.connect({
                        client: thirdwebClient,
                        walletConnect: { showQrModal: true },
                      })
                    }

                    // return the wallet
                    return metamask
                  })
                }
              >
                <div className="flex items-center gap-5">
                  <Image src={Metamask} alt="metamask" width={30} height={28} />
                  <p>Metamask</p>
                </div>
                <Image src={ArrowUpRight} alt="arrow" width={24} height={24} />
              </div>
              <div
                className="rounded-2xl bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border hover:border-primary flex items-center justify-between gap-8 p-8 cursor-pointer"
                onClick={() =>
                  connect(async () => {
                    const WalletConnect = createWallet("walletConnect") // pass the wallet id

                    // if user has WalletConnect installed, connect to it
                    if (injectedProvider("walletConnect")) {
                      const { address } = await WalletConnect.connect({ client: thirdwebClient })
                      if (address) {
                        setOpen(false)
                        router.push("/dashboard")
                      }
                    }

                    // open wallet connect modal so user can scan the QR code and connect
                    else {
                      await WalletConnect.connect({
                        client: thirdwebClient,
                      })
                    }

                    // return the wallet
                    return WalletConnect
                  })
                }
              >
                <div className="flex items-center gap-5">
                  <Image src={ConnectWallet} alt="connectwallet" width={30} height={28} />
                  <p>Connect Wallet</p>
                </div>
                <Image src={ArrowUpRight} alt="arrow" width={24} height={24} />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default WalletConnect