import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type Cheat = {
  cheatUsed: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) 
{
    switch (req.method) {
        case 'GET': {
            // let data: string = fs.readFileSync('cheat.json', 'utf8')
            // console.log("get hit");
            // console.log(data);
            
            res.status(200).json("{'cheatUsed':true}");
            break;
        }
        case 'POST': {
            let data : string = req.body;
            console.log("post hit");
            console.log(data);
            // fs.writeFileSync('cheat.json', JSON.stringify(data));
            // data = JSON.parse(fs.readFileSync('cheat.json', 'utf8'));
            res.status(200).json("{'cheatUsed':true}");
            break;
        }
        default: {
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
        }
    }
}