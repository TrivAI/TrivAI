import { notFound } from "next/navigation";
import TabSwitcher from "../../components/TabSwitcher";
import { db } from "@/src/db";
import ClientAuthenticatedQuiz from "./ClientAuthenticatedQuiz";
import { getCurrentUser } from "@/src/session";
import ClientUnauthenticatedQuiz from "./ClientUnauthenticatedQuiz";

interface Routes {
  [key: string]: JSX.Element;
}

function getDueDate() {
  var currentDate = new Date();
  var offset = 7 * 60 * 60 * 1000; // Offset in milliseconds for GMT-7
  var adjustedDate = new Date(currentDate.getTime() - offset);
  var month = (adjustedDate.getMonth() + 1).toString();
  var day = adjustedDate.getDate().toString().padStart(2, "0");
  var year = adjustedDate.getFullYear();
  return month + "/" + day + "/" + year;
}

function getDate() {
  var currentDate = new Date();
  var offset = 7 * 60 * 60 * 1000; // Offset in milliseconds for GMT-7
  var adjustedDate = new Date(currentDate.getTime() - offset);
  var year = adjustedDate.getFullYear();
  var month = (adjustedDate.getMonth() + 1).toString().padStart(2, "0");
  var day = adjustedDate.getDate().toString().padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function flattenObjectToStringArray(array: any[]) {
  return array.map((item) => item[Object.keys(item)[0]].toLowerCase() );
}

async function getActiveCategories() {
  return await db.quizCategory.findMany({
    where: {
      isActive: true,
    },
    select: {
      category: true,
      createdAt: true,
    },
  });
}

async function getUsersAnswersForToday(userId: string, category : string) {
  return await db.userAnswers.findMany({
    where: {
      userId: userId,
      category: category.toUpperCase() as any,
    },
    select: {
      questionId: true,
    },
  });
}

async function getActiveQuestionsByCategoryForUser(category: string, userId: string | undefined) {

  const questions = await db.question.findMany({
    where: {
      category: category.toUpperCase() as any,
      // change when ready to go live to 0
    },
    select: {
      image: true,
      id: true,
      answer1: true,
      answer2: true,
      answer3: true,
      correctAnswer: true,
      category: true,
    },
  });
  if (userId) {
    const userAnswers = await getUsersAnswersForToday(userId, category);
    
    let newQuestions = questions
      .filter(
        (item) => !flattenObjectToStringArray(userAnswers).includes(item.id)
      )
      .map(({ correctAnswer, ...question }) => ({
        ...question,
        answer4: correctAnswer,
      }));
      // console.log(newQuestions);
      
    return newQuestions;
  }

  return questions.map(({correctAnswer, ...question}) => ({...question, answer4: correctAnswer}));
}

export default async function Page({ params }: { params: { toquiz: string } }) {
  const user = await getCurrentUser();
  const activeCategories = await getActiveCategories();
  
  const activeCategoriesArray = flattenObjectToStringArray(activeCategories) as string[];
  if (!activeCategoriesArray.includes(params.toquiz)) {
    return notFound();
  }
  const activeQuestions = await getActiveQuestionsByCategoryForUser(params.toquiz, user?.id);  
  
  return (
    <>
      <TabSwitcher routes={activeCategoriesArray} />
      <main className="">
        {user ? (
          <ClientAuthenticatedQuiz activeQuestions={activeQuestions} />
        ) : (
          // give the guest less questions
          <ClientUnauthenticatedQuiz
            activeQuestions={activeQuestions.slice(
              Math.floor(activeQuestions.length * .5)
            )}
          />
        )}
      </main>
    </>
  );
}
