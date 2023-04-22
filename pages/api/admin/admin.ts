import { authOptions } from "@/src/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";


// this route is only accessible by admin users
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log("cookies:", req.cookies);
    // console.log('headers', req.headers);
    const session : Session | null = await getServerSession(req, res, authOptions);
    // console.log("session:", session);
    
    if (session) {
        // console.log(session);
        if (session.user.role === "ADMIN") {
            if (req.method === "POST") {
                let data = req.body;
                console.log(data);
            }
            res.status(200).json({message: "Success"});
            return;
        } else {                
            res.status(401).json({message: "Unauthorized"});
            return;
        }

    }
    res.status(403).json({message: "Forbidden"});
}