// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  dude: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("hello api has been hit");
  
  res.status(200).setHeader("Set-Cookie","name=vicccc").json({ dude: 'Hello from the backend you just hit an api' });
}
