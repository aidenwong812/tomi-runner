import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { client } from "./client";
import { chain } from "./chain";

import {ConnectEmbed} from 'thirdweb/react'


export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex flex-col items-center justify-center bg-primary-200">
      <div className="container flex flex-col justify-center gap-12 px-4 pb-24">
        <div className="space-y-20">
        <h1 className="text-6xl font-medium text-text-100">
          SlickCI makes faster and cheaper CIs
        </h1>
        <Link href='/for-github-actions' className="flex flex-col bg-primary-100 rounded-lg p-8 md:w-1/2 space-y-8 cursor-pointer hover:bg-bg-300">
          <div className="space-y-2">
          <h3 className="text-text-100 text-lg font-semibold">For Github Actions</h3>
          <p className="text-text-200 text-sm">Deploy your CICD workflows on decentralized bare metal services with one click</p>
          </div>
          <div className="flex items-center space-x-2">
          <p className="text-text-100 text-sm">Go to product</p>
          <FaArrowAltCircleRight color="white" size={14} />
          </div>
        </Link>
        </div>
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
