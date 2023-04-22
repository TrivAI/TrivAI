import { db } from "@/src/db";
import ClientUsers from "./ClientUsers";

async function getUsers() {
    return await db.user.findMany();
}

export default async function Page() {
    const users = await getUsers();
    console.log(users);
    
    return (
      <main>
        <h1 className="text-3xl text-center m-4 p-4">
          <b>Users</b>
        </h1>
        <ClientUsers users={users} />
      </main>
    );
}