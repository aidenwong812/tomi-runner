'use client';
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import {client} from '../../app/client'
import { useRouter } from "next/navigation";

export default function Connect() {
    const router = useRouter();

    const redirectToProfile = () => {
        router.push('/profile')
    }

  return (
    <div>
      <ConnectButton client={client}
      onConnect={
      () => redirectToProfile()
      }
       connectModal={{
        size: 'compact',
        title: 'Login to SlickCI',
      }}
      connectButton={{
        label: 'Log in',
        style: {
            padding: 'none',
            display: 'flex',
            justifyContent: 'end',
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
        }
      }}
      detailsButton={{
        style: {
            padding: 'none',
            fontSize: '12px',
            backgroundColor: 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            border: 'none',
        },
        className: 'text-xs p-0 m-0',
        displayBalanceToken: '0x165D7c367f70eF96fe4B9b50140Ca456bbECD941'
      }}

       />
    </div>
  );
}
