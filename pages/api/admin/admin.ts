import { authOptions } from "@/src/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { db } from "@/src/db";

// this route is only accessible by admin users
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session : Session | null = await getServerSession(req, res, authOptions);
    
    if (session) {
        if (session.user.role === "ADMIN") {
            if (req.method === "PUT") {
                let data = req.body;
                console.log("here is the ");
                data.forEach(async (user: any) => {
                    console.log(user);
                    await db.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            role: user.role
                        }
                    });
                });
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