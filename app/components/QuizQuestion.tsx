import ImageUpload from "./ImageUpload";

export default function QuizQuestion() {
    return (
      <div className="border border-purple-500 p-4 md:col-span-3 text-center">
        <h1 className="text-3xl m-2"><b>Add a quiz question</b></h1>
        <ImageUpload />
      </div>
    );
}