import { db } from "@/src/db";
import Table from "@/app/components/Table";

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
    const usersHead = ["ID", "Email", "Name", "Role", "Cheat Used", "Total Score"];
    const users = await getUsers();
    return (
      <main>
        <Table title="Users" data={users} thead={usersHead} />
      </main>
    );
}