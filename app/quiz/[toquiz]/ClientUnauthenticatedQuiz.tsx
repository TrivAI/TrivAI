"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
// import QuestionOptions from '@/app/components/QuestionOptions';

function shuffle(array: string[]) {
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

function removeTrailingS(str: string) {
  return str.replace(/s$/, "");
}

export default function ClientUnauthenticatedQuiz({
  activeQuestions,
}: {
  activeQuestions: any;
}) {
  const buttonFocusRef = useRef<HTMLButtonElement>(null);
  const [answers, setAnswers] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>(activeQuestions);
  let question = questions[0] || null;
  let { answer1, answer2, answer3, answer4 } = question || {};


  /** HandleClick will only execute when questions exist */
  const handleClick = (answer: string) => {
    setQuestions(questions.slice(1));
  };
  useEffect(() => {
    setAnswers(shuffle([answer1, answer2, answer3, answer4]));
    buttonFocusRef.current?.focus();
  }, [answer1, answer2, answer3, answer4]);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="py-4 px-4 lg:px-24 flex flex-nowrap justify-between w-[100dvw]"></div>
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
                )} ??🙈`}
              </b>
            </h1>
            <div className="my-12 grid grid-cols-2">
              {answers.map((answer: any, index: number) => {
                return (
                  <button
                    ref={index === 0 ? buttonFocusRef : null}
                    className="border border-blue-500 text-blue-500 m-2 p-2 hover:bg-blue-500 hover:text-black"
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
