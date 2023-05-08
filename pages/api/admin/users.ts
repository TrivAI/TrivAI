import { authOptions } from "@/src/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import { db } from "@/src/db";

function randomStringWithSameLength() {
  const exampleString = 'clheh8t5n0000md08fnlfavei';
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // possible characters to choose from
  
  for (let i = 0; i < exampleString.length; i++) {
    if (exampleString[i] === '0') { // if the current character is a 0, add it to the result string
      result += '0';
    } else { // otherwise, choose a random character from the characters string and add it to the result string
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  
  return result;
}

// this route is only accessible by admin users
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session : Session | null = await getServerSession(req, res, authOptions);
    
    if (session) {
        if (session.user.role === "ADMIN") {
            if (req.method === "POST") {
                let {id, email, name, role, cheatUsed, totalScore} = req.body;
                const response = await db.user.findFirst({
                        where: {
                            id: id,
                        }
                    });
                if (response) {
                    await db.user.update({
                        where: {
                            id: id
                        },
                        data: {
                            email: email,
                            name: name,
                            role: role,
                            cheatUsed: cheatUsed,
                            totalScore: parseInt(totalScore)
                        }
                    });
                } else {
                    res.status(404).json({message: "Not Found"});
                }
                res.status(200).json({message: "Success"});
                return;
            }
            else {
                res.status(405).json({message: "Method Not Allowed"});
                return;
            }
        } else {                
            res.status(401).json({message: "Unauthorized"});
            return;
        }

    }
    res.status(403).json({message: "Forbidden"});
}