"use client";
import { useState } from "react";


async function sendForm(obj: any) {
  let response: Response | undefined;
  try {
    response = await fetch("/api/admin/entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (e: any) {
    console.log("this is the error", e);
    return new Error("Network Error", e);
  }
  return response?.ok
    ? response.json()
    : { message: new Error("Failed post request") };
}

export default function QuizForm() {
    const [hasSubmit, setHasSubmit] = useState(false);
    const [error, setError] = useState(false);
    
    const submitForm = async (e: any) => {
      e.preventDefault();
      setError(false);
      let form = e.target;

      const formData = new FormData(form);

      const formJson = Object.fromEntries(formData.entries());
      const response = await sendForm(formJson);
      console.log(response.message);

      if (response.message != "success") {
        setError(true);
        return;
      }
      setHasSubmit(true);
      e.target.reset();
    };
    return (
      <div className="my-4 border border-yellow-500 text-center grid md:m-0 md:grid-cols-3">
        <h1>
          <b>Category</b>
        </h1>
        <form
          className={
            "p-2 flex flex-col" +
            (hasSubmit && !error ? "border-green-400 border-4" : "") +
            (error ? "border-red-500 border-4" : "")
          }
          onSubmit={submitForm}
        >
          <span>
            <b className="p-2">Add new category:</b>
            <input
              className="bg-transparent border border-blue-500"
              type="text"
            />
          </span>
          <button
            type="submit"
            className="border border-blue-500 p-2 m-4 hover:bg-blue-500 hover:text-black"
          >
            Submit
          </button>
          {error && <p className="text-red-500">Error</p>}
        </form>
      </div>
    );
}