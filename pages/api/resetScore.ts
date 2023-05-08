import { authOptions } from "@/src/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { db } from "@/src/db";

// this route is only accessible by admin users
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session : Session | null = await getServerSession(req, res, authOptions);
    if (session) {
        if (req.method == 'PUT') {
            let {id, totalScore} = req.body;
                await db.user.update({
                    where: {
                        id: id
                    },
                    data: {
                        totalScore: parseInt(totalScore)
                    }
                });
            res.status(200).json({message: "Success", totalScore: totalScore});
            return;
        }
    }
    res.status(403).json({message: "Forbidden"});
}