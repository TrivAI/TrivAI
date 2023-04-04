
import { getServerSession } from "next-auth/next"
import { NextApiRequest, NextApiResponse } from 'next';



// export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
//   const session = await getServerSession(req, res, authOptions)

//   if (!session) {
//     res.status(401).json({ message: "You must be logged in." });
//     return;
//   }

//   res.status(200).json({
//     message: 'Success',
//   })
// }

// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

export default async function handler(req : NextApiRequest, res: NextApiResponse) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req })
  if (token) {
    // Signed in
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}