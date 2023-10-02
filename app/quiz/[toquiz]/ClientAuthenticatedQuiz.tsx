'use client';
import { useStore } from '@/src/store';
import Image from 'next/image';
import CheatCode from '../../components/CheatCode';
import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
// import QuestionOptions from '@/app/components/QuestionOptions';

function getDueDate() {
  let timeZoneOffset = new Date().getTimezoneOffset() * 60000;
  return new Date(Date.now() - timeZoneOffset).toLocaleDateString();
}

function shuffle(array : string[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function removeTrailingS(str : string) {
    return str.replace(/s$/, '');
}

export default function ClientAuthenticatedQuiz({
  activeQuestions,
}: {
  activeQuestions: any;
}) {
  console.log(getDueDate());
  
  let router = useRouter();
  const {data: session} = useSession();
  const userId = session?.user.id;
  const buttonFocusRef = useRef<HTMLButtonElement>(null);
  const { totalScore, name, incrementScore, cheatUsed } = useStore(
    (state) => state
  );
  const [answers, setAnswers] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>(activeQuestions);
  let question = questions[0] || null;
  let { answer1, answer2, answer3, answer4 } = question || {};
  const questionId = question?.id;
  //   let answer2 = question != null && question.answer2;
  //   let answer3 = question != null && question.answer3;
  //   let correctAnswer = question != null && question.correctAnswer;

  /** HandleClick will only execute when questions exist */
  const handleClick = async (answer: string) => {
    let res; 
    try {
      res = await fetch("/api/checkQuestion", {
        method: "PUT",
        body: JSON.stringify({
          answer,
          userId,
          questionId,
        }),
      });
    } catch (e) {
      alert("Error Occured!");
    }
    if (res?.status === 200) {
      const data = await res.json();
      if (data.correct) {
        incrementScore(3);
        alert("Correct!");
      } else {
        alert("Incorrect!");
      }
    } else if (res?.status === 409) {
      alert("You already answered this question!");
    } else if (res?.status === 500) {
      alert("Something wrong with the server!");
      return;
    }
    setQuestions(questions.slice(1));
    router.refresh();
  };

  useEffect(() => {
    setAnswers(shuffle([answer1, answer2, answer3, answer4]));
    buttonFocusRef.current?.focus();
  }, [answer1, answer2, answer3, answer4]);
  return (
    <div>
      {!cheatUsed ? <CheatCode /> : ""}
      <div className="flex flex-col justify-center items-center">
        <div className="py-4 px-4 lg:px-24 flex flex-nowrap justify-between w-[100dvw]">
          <p>Current Score: {totalScore}</p>
          <p className="">Questions left for today: {questions.length}</p>
        </div>
        {question ? (
          <div>
            <Image
              src={question!.image}
              alt={
                "this image is used for a " +
                question.category.toLowerCase() +
                " question"
              }
              width={1500}
              height={1500}
            />
            <h1 className="text-3xl m-4 px-4 text-center">
              <b>
                {" "}
                {`Can you guess the ${removeTrailingS(
                  question.category.toLowerCase()
                )} ??`}
              </b>
            </h1>
            <div className="my-12 grid grid-cols-2">
              {answers.map((answer: any, index: number) => {
                return (
                  <button
                    ref={index === 0 ? buttonFocusRef : null}
                    className="border border-blue-500 text-blue-500 m-2 p-2 lg:hover:bg-blue-500 lg:hover:text-black"
                    key={index}
                    onClick={() => handleClick(answer)}
                  >
                    <b>{answer}</b>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl m-4 px-4 text-center">
              <b> You have completed this quiz for today!!</b>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
