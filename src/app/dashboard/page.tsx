import { auth } from "@/utils/auth"
import Dashboard from "../_components/dashboard/dashboard"

const Page = async () => {
  const session = await auth()

  return (
    <Dashboard user={session?.user} />
  )
}

export default Page