import { createThirdwebClient } from 'thirdweb'

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

export const thirdwebClient = createThirdwebClient({
    clientId: CLIENT_ID!
})
