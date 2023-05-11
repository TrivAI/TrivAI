'use client';

import { useStore } from "@/src/store";
import { useState } from "react";

async function sendForm(obj : any) {
  let response : Response | undefined;
  try {
    response = await fetch("/api/feedBack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }
  catch (e : any) {
    console.log("this is the error", e);
    return new Error("Network Error", e);
  }
  return response?.ok
    ? response.json()
    : { message: new Error("Failed post request") };
}

// function shakeAnimation

export default function ClientAbout() {
    const [hasSubmit, setHasSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const submitForm = async (e : any) =>{
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
      setMessage(response.feedback);
      setHasSubmit(true);
      e.target.reset();
    }

    return (
      <div className="flex justify-center items-center flex-col w-fit my-4 mx-auto">
        <h1 className="m-4 text-2xl">Feed Back</h1>
        <form
          className={
            "flex flex-col " +
            (hasSubmit && !error ? "border-green-400 border-4" : "") +
            (error ? "border-red-400 border-4" : "")
          }
          onSubmit={submitForm}
        >
          <label className="flex m-4 items-center justify-between">
            <span>Name:</span>
            <input
              className="ml-4 p-2 bg-[#364153]"
              type="text"
              name="name"
              disabled={false}
              placeholder="Dude Bro"
              required
            />
          </label>
          <label className="flex m-4 items-center justify-between">
            <span>Email:</span>
            <input
              className="ml-4 p-2 bg-[#364153]"
              type="email"
              name="email"
              disabled={false}
              placeholder="hi123@live.com"
              required
            />
          </label>
          <label className="flex m-4 items-center justify-between">
            <span>Message:</span>
            <input
              className="ml-4 p-2 bg-[#364153]"
              type="text"
              name="message"
              disabled={false}
              placeholder="This thing sucks..."
              maxLength={150}
              required
            />
          </label>
          <button
            type="submit"
            className="border border-blue-500 p-2 m-4 lg:hover:bg-blue-500 lg:hover:text-black"
          >
            Submit
          </button>
        </form>
        {message.length > 0 ? <p>Your Message: {message}</p> : <p></p>}
      </div>
    );
}