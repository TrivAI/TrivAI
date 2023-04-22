'use client';
import CheatCode from '../CheatCode';


import { useState, useEffect } from 'react';
import Image from 'next/image';
import StoreInitializer from '@/app/components/StoreInitializer';
import { useStore } from '../../../src/store';
import QuestionOptions from '@/app/components/QuestionOptions';

type MovieQuizQuestion = {
question: string;
options: string[];
answer: string;
};

type MovieQuiz = {
questions: MovieQuizQuestion[];
};

(() => {console.log("hi")})();

export default function ClientMovie() {
  
  const [questions, setQuestions] = useState<MovieQuizQuestion[]>([]);
  const { totalScore, name, incrementScore, cheatUsed } = useStore(
    (state) => state
  );

  useEffect(() => {
    console.log(document.cookie);
    try {
      fetch("/api/movies")
      .then((res) => res.json())
      .then((movieQuestionsObject) => {
        setQuestions(movieQuestionsObject.questions);
        console.log(movieQuestionsObject.questions);
      });
    }
    catch (error) {
      console.log(error);
    }
  }, []);

  const checkAnswer = (answer: string) => {
    if (answer === questions[0].answer) {
      alert("Correct answer");
      incrementScore();
      setQuestions(questions.slice(1));
    } else {
      console.log("incorrect");
      alert("wrong answer");
    }
  };
  return (
    <div className="p-4 flex flex-col justify-center items-center ">
      {!cheatUsed ? <CheatCode /> : ""}
      {/* <StoreInitializer cheatUsed={cheatUsed}/> */}
      <p>{name}</p>
      {/* <button className="border-2 border-red-400" >Increment</button> */}

      <div className="px-4 flex flex-nowrap justify-between w-[100dvw]">
        <p>Current Points: {totalScore}</p>
        <p className="">Questions left: 20</p>
      </div>

      {questions.length > 0 ? (
        <div className="m-4 flex flex-col">
          <p>{questions[0].question}</p>
          <div className="grid grid-cols-2">
            {questions[0].options.map((option, index) => {
              return (
                <button
                  className="border border-blue-500 text-blue-500 m-2 p-2"
                  onClick={() => checkAnswer(option)}
                  key={index}
                >
                  {option}
                </button>
              );
            })}
          </div>
          <QuestionOptions />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}