import QuizQuestion from "@/app/components/QuizQuestion";
import { db } from "@/src/db";
import Table from "@/app/components/Table";



async function getKeywords() {
  return await db.keywordPrompt.findMany();
}
async function getQuizCategories() {
  return await db.quizCategory.findMany();
}
async function getQuestions() {
  return await db.question.findMany();
}
async function getQuestionData() {
  return await db.questionData.findMany();
}

export default async function Page() {
    const [keywords, categories, questions, questionData] = await Promise.all([
        getKeywords(),
        getQuizCategories(),
        getQuestions(),
        getQuestionData(),
    ]);
    const keywordHead = ["ID", "Keyword", "Category", "Used"];
    const categoryHead = ["ID", "Category", "GPT Base Prompt", "Stable Diffusion Prompt", "Created At", "Active"];
    const questionHead = [
      "ID",
      "Category",
      "Is Used",
      "Answer1",
      "Answer2",
      "Answer3",
      "Correct Answer",
      "Created At",
      "Updated At",
      "Date Due",
      "Image",
    ];
  return (
    <div className=" flex flex-col space-y-12">
      <div className="grid grid-cols-1 justify-center">
        <Table title="Keywords" data={keywords} thead={keywordHead} />
        <Table title="Categories" data={categories} thead={categoryHead} />
        <Table title="Questions" data={questions} thead={questionHead} />
      </div>
      {/* <QuizQuestion /> */}
    </div>
  );
}
