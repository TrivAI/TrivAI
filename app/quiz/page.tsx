import Link from "next/link";
import { db } from "@/src/db";
import Image from "next/image";
const routes = [ "Pokemon", "Movies", "Games", "Geography", "Cars"];

function getDueDate(daysInAdvance : number = 0) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate() + daysInAdvance;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

async function getEachFirstActiveQuestionByCategory() {
  let questions = [];
  let categories = await db.quizCategory.findMany({
    where: {
      isActive: true,
    },
    select: {
        category: true,
    },
  });
  if (categories.length === 0) {
    return [];
  }
  for (const {category} of categories) {
    let question = await db.question.findFirst({
      where: {
        category: category,
        dateDue: getDueDate(1),
      },
      select: {
        image: true,
        category: true,
      },
    });
    questions.push(question);
  }  
  return questions;
}

export default async function Home() {
    let questions = await getEachFirstActiveQuestionByCategory();
    
    if (questions.length === 0) {
        return <h1 className="text-2xl">No questions due today</h1>;
    }
    return (
      <div className="my-24 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-auto">
        {questions.map((question, index) => {
          if (question === null) {
            return null;
          }
          return (
            <Link
              className="p-4 border border-slate-500 hover:bg-slate-800"
              key={question?.category}
              href={`/quiz/${question?.category.toLowerCase()}`}
            >
              <Image
                className="mx-auto my-12"
                src={question!.image}
                alt={question!.category}
                width={512}
                height={512}
              />
              <p className="text-center">
                <b>{question?.category.toUpperCase()}</b>
              </p>
            </Link>
          );
        })}
      </div>
    );
}