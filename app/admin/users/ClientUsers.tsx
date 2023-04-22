"use client";
import { startTransition, useMemo, useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  role: string;
  email: string;
  cheatUsed: boolean;
  totalScore: number;
}

interface Props {
  users: User[];
}

function Row({
  user,
  roleChanged,
  onRoleChange,
}: {
  user: User;
  roleChanged: boolean;
  onRoleChange: (id: string, value: string) => void;
}) {
  return (
    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>
        <input
          className={`bg-black ${roleChanged ? "border border-yellow-500" : ""}`}
          type="text"
          defaultValue={user.role}
          onBlur={(e) => onRoleChange(user.id, e.target.value)}
        />
      </td>
      <td>{user.email}</td>
      <td>{`${user.cheatUsed}`}</td>
      <td>{user.totalScore}</td>
    </tr>
  );
}

const MemoizedRow = React.memo(Row);

export default function ClientUsers({ users }: any) {
    let obj = {
        style: "border border-yellow-500",
    }
    const router = useRouter();
    const [roleChanged, setRoleChanged] = useState(new Set<string>());
    const [modifiedUsers, setModifiedUsers] = useState<User[]>([]);

    const handleRoleChange = (id: string, value: string) => {
        
        const user = users.find((user) => user.id === id);
        if (value !== user?.role) {
            setRoleChanged((roleChanged) => new Set(roleChanged.add(id)));
            setModifiedUsers((modifiedUsers) => [
                ...modifiedUsers.filter((user) => user.id !== id),
                { ...user, role: value },
            ]);
            startTransition(() => {
            // Refresh the current route:
            // - Makes a new request to the server for the route
            // - Re-fetches data requests and re-renders Server Components
            // - Sends the updated React Server Component payload to the client
            // - The client merges the payload without losing unaffected
            //   client-side React state or browser state
            router.refresh();

            // Note: If fetch requests are cached, the updated data will
            // produce the same result.
            });
        } else {
        setRoleChanged(
            (roleChanged) => new Set([...roleChanged].filter((item) => item !== id))
        );
        setModifiedUsers((modifiedUsers) =>
            modifiedUsers.filter((user) => user.id !== id)
        );
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("/api/admin/admin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedUsers),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    };

  const memoizedUsers = useMemo(() => users, [users]);

  return (
    <div className="overflow-x-auto">
      <form onSubmit={handleFormSubmit}>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Cheat Used</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {memoizedUsers.map((user) => (
              <MemoizedRow
                key={user.id}
                user={user}
                roleChanged={roleChanged.has(user.id)}
                onRoleChange={handleRoleChange}
              />
            ))}
          </tbody>
        </table>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
