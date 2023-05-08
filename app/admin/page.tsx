import { getCurrentUser } from "@/src/session";
import { db } from "@/src/db";

async function getLiveQuestions() {
    const options = { timeZone: "America/Los_Angeles" };
    return await db.question.findMany({
      where: {
        dateDue: {
          equals: new Date().toLocaleDateString("en-US", options),
        },
      },
    });
}

export default async function Page() {    
    const data = await getLiveQuestions();
    
    return (
      <div className="">
        <div className="grid grid-cols-1 justify-center">
          <h1 className="text-3xl m-4 px-4">
            <b>Live Questions</b>
          </h1>
          <div className="overflow-x-auto">
            <table className="table table-compact md:table-normal w-full">
              {/* head */}
              <thead className="">
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Date Due</th>
                </tr>
              </thead>
              <tbody>
                {data.map((entry, index) => (
                  <tr key={index}>
                    <th>
                      <a href={entry.id}> {index + 1}</a>
                    </th>
                    <td>{entry.id}</td>
                    <td>{entry.category}</td>
                    <td>{entry.image}</td>
                    <td>{entry.dateDue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}


