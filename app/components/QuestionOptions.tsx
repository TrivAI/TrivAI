export default function QuestionOptions() {
    return (
      <div>
        <dl>
          <dt>Question: </dt>
          <span className="grid grid-cols-2 text-center">
            <dd className="border border-blue-500 text-blue-500 m-2 p-2">
              <button className="w-100 h-100">Answer1</button>
            </dd>
            <dd className="border border-blue-500 text-blue-500 m-2 p-2">
              Answer2
            </dd>
            <dd className="border border-blue-500 text-blue-500 m-2 p-2">
              Answer3
            </dd>
            <dd className="border border-blue-500 text-blue-500 m-2 p-2">
              Answer4
            </dd>
          </span>
        </dl>
      </div>
    );
}