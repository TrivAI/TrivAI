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
            selectedAnswer: true,
            category: true,
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
            <h1 className="text-3xl text-center m-6">Results</h1>
            <div className="m-auto grid gap-2 grid-cols-1 md:gap-4 md:grid-cols-3 lg:gap-6 lg:grid-cols-4 w-max">
              {usersAnswers.map((answer, index) => (
                <div className="border border-blue-500 p-2" key={answer.questionId}>
                  <p>Question ID:</p>
                  <p className="mb-2">{answer.questionId}</p>
                  <p>Selected Answer:</p>
                  <p className="mb-2">{answer.selectedAnswer}</p>
                  <p>Category:</p>
                  <p className="mb-2">{answer.category}</p>
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