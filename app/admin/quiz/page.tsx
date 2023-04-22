import QuizEntry from "@/app/components/QuizEntry";
import QuizQuestion from "@/app/components/QuizQuestion";
import QuizKeywordPrompt from "@/app/components/QuizKeywordPrompt";
import QuizBasePrompt from "@/app/components/QuizBasePrompt";


export default function Page() {
  return (
    <div className="border border-blue-500 flex flex-col text-center space-y-12">
      <h1 className="text-3xl md:col-span-1 m-4 p-4">
        <b>Add New Quiz </b>
      </h1>
      <QuizEntry />
      {/* <QuizKeywordPrompt /> */}
      {/* <QuizBasePrompt /> */}
      <QuizQuestion />
    </div>
  );
}
