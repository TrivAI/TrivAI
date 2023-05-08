import {db } from "@/src/db";
import { getCurrentUser } from "@/src/session";
import { notFound } from "next/navigation";

async function getUsersAnswers(userId: string) {
    return await db.userAnswers.findMany({
        where: {
            userId: userId,
        },
        select: {
            questionId: true,
        },
    });
}

export default async function User() {
    const user = await getCurrentUser();
    if (!user) {
        return notFound();
    }
    const usersAnswers = await getUsersAnswers(user?.id);
    return (
      <main>
        {user ? (
          <>
            <h1 className="text-3xl text-center">Results</h1>
            <div>
              {usersAnswers.map((answer, index) => (
                <div key={answer.questionId}>
                  <p>{answer.questionId}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="text-3xl text-center">Not Allowed</h1>
        )}
      </main>
    );
}