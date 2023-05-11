"use client";
import { useStore } from "@/src/store";
import { useEffect, useState } from "react";
import LetterModel from "../components/LetterModel";
import { signOut } from "next-auth/react";

export default function ClientSettings() {
  const { totalScore, incrementScore, resetScore, deleteAccount } = useStore((state) => state);
  const [score, setScore] = useState<number>(totalScore);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="m-4 grid grid-cols-1 gap-12">
        <h1 className="text-2xl">
          <b>Your Score: {score}</b>
        </h1>
        <button
          aria-label="Button does nothing just for fun"
          title="this actually does not do anything haha, watch refresh the page"
          className="border-2 border-indigo-500 p-4 lg:hover:bg-indigo-500 lg:hover:text-black"
          onClick={() => setScore(score + 1)}
        >
          <b>ONE UP</b>
        </button>
        {totalScore > 0 ? (
          <button
            aria-label="Reset score"
            title="this button might ruin your day :)"
            className="border-2 border-red-500 p-4 lg:hover:bg-red-500 lg:hover:text-black"
            onClick={() => {
              resetScore();
              setScore(0);
            }}
          >
            <b>THIS BUTTON IS DANGEROUS</b>
          </button>
        ) : (
          <button
            aria-label="Reset score"
            title="this button might ruin your day :)"
            className="border-2 border-red-500 p-4 lg:hover:bg-red-500 lg:hover:text-black"
            onClick={() => {
              setScore(0);
            }}
          >
            <b>THIS BUTTON IS DANGEROUS</b>
          </button>
        )}

        <LetterModel />
        <button
          title="Delete account"
          aria-label="Delete account"
          className="border-2 border-red-500 p-4 lg:hover:bg-red-500 lg:hover:text-black"
          onClick={() => {
            try {
              deleteAccount();
            } catch (e) {
              console.error(e);
            }
            signOut({ callbackUrl: `/` });
            alert("Successfully deleted account");
          }}
        >
          <b>DELETE YOUR ACCOUNT NO GOING BACK</b>
        </button>
      </div>
    </div>
  );
}
