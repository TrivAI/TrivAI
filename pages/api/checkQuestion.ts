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
            let {questionId, userId, answer} = JSON.parse(req.body);
            
            let user = await db.user.findFirst({
                where: {
                    id: userId
                }
            });
            let question = await db.question.findUnique({
                where: {
                    id: questionId
                },
                select: {
                    correctAnswer: true,
                    category: true
                }
            });
            if (question && user) {
                const isAnswered = await db.userAnswers.findFirst({
                    where: {
                        userId: userId,
                        questionId: questionId
                    }
                });
                if (isAnswered) {
                    res.status(409).json({message: "Already Answered"});
                    return;
                }

                if (question.correctAnswer === answer) {
                    await db.userAnswers.create({
                        data : {
                            userId: userId,
                            questionId: questionId,
                            selectedAnswer: answer,
                            category: question.category
                        }
                    });
                    res.status(200).json({correct: true});
                    return;
                } else {
                    await db.userAnswers.create({
                        data : {
                            userId: userId,
                            questionId: questionId,
                            selectedAnswer: answer,
                            category: question.category
                        }
                    });
                    res.status(200).json({correct: false});
                    return;
                }

            } else {
                res.status(404).json({message: "User or Quesiton Not Found"});
                return;
            }
        }
    }
    res.status(403).json({message: "Forbidden"});
}