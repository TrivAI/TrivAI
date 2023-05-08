import { db } from "@/src/db";
import ClientUsers from "./ClientUsers";

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

export default async function Page() {
    const users = await getUsers();
    return (
      <main>
        <h1 className="text-3xl m-4 px-4">
          <b>Users</b>
        </h1>
        <ClientUsers users={users} />
      </main>
    );
}