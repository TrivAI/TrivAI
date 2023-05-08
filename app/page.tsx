import Image from 'next/image'
import { Inter } from '@next/font/google'
import { db } from '@/src/db';


const inter = Inter({ subsets: ['latin'] })


async function getUsers() {
  return await db.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      cheatUsed: true,
      totalScore: true,
    },
  });
}


export default async function Home() {
  const usersHead = [
    "Position",
    "Name",
    "Role",
    "Cheat Used",
    "Total Score",
  ];
  const users = await getUsers();
  users.sort((a: any, b: any) => b.totalScore - a.totalScore);
  return (
    <main className="">
      <div className="flex justify-center flex-col">
        <h1 className="text-3xl m-4 p-4 text-center">
          <b>LEADERBOARD</b>
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full mb-12" data-theme="">
            {/* <!-- head --> */}
            <thead>
              <tr>
                {usersHead.map((entry: string, index: number) => (
                  <th key={index}>{entry}</th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {/* <!-- row 1 --> */}
              {users.map((row, index) => (
                <tr key={row.id}>
                  <th>{index + 1}</th>
                  <td>{row.name}</td>
                  <td>{row.role}</td>
                  <td>{`${row.cheatUsed}`}</td>
                  <td>{row.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </main>
  );
}
