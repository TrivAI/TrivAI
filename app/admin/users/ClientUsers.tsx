"use client";
import { useTransition, useMemo, useState } from "react";
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
    const roles = ["USER", "ADMIN"];
    const role = roles.filter((role) => user.role !== role).at(0);
  return (
    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>
        <select
          className={`bg-black ${
            roleChanged ? "border border-yellow-500" : ""
          }`}
          onChange={(e) => onRoleChange(user.id, e.target.value)}
        >
          <option value={`${user.role}`}>{user.role}</option>
          <option value={role}>{role}</option>
        </select>
      </td>
      <td>{user.email}</td>
      <td>{`${user.cheatUsed}`}</td>
      <td>{user.totalScore}</td>
    </tr>
  );
}

const MemoizedRow = React.memo(Row);

export default function ClientUsers({ users }: any) {
    let componentStyles = {
      input: "border border-yellow-500",
      false:
        "m-4 p-4 border border-blue-500 hover:bg-blue-500 hover:text-black",
      true: "m-4 p-4 bg-gray-300 border border-blue-200 text-gray-500 hover:cursor-not-allowed",
    };
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [roleChanged, setRoleChanged] = useState(new Set<string>());
    const [modifiedUsers, setModifiedUsers] = useState<User[]>([]);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    
    const handleRoleChange = (id: string, value: string) => {
        
        const user = users.find((user : any) => user.id === id);
        if (value !== user?.role) {
            setRoleChanged((roleChanged) => new Set(roleChanged.add(id)));
            setModifiedUsers((modifiedUsers) => [
                ...modifiedUsers.filter((user) => user.id !== id),
                { ...user, role: value },
            ]);
            setButtonDisabled(false);
            // startTransition(() => {
            //     // Refresh the current route:
            //     // - Makes a new request to the server for the route
            //     // - Re-fetches data requests and re-renders Server Components
            //     // - Sends the updated React Server Component payload to the client
            //     // - The client merges the payload without losing unaffected
            //     //   client-side React state or browser state
            //     router.refresh();

            //     // Note: If fetch requests are cached, the updated data will
            //     // produce the same result.
            // });
        } else {
        setRoleChanged(
            (roleChanged) => new Set([...roleChanged].filter((item) => item !== id))
        );
        setModifiedUsers(
            (modifiedUsers) => modifiedUsers.filter((user) => user.id !== id) 
        );
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // leave the default form submit behavior to reload the page
      // e.preventDefault();
        fetch("/api/admin/admin", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedUsers),
        })
        .then((response) => response.json())
        .then((data) => data.message && alert(data.message))
        .catch((error) => console.error(error));
        // setRoleChanged(new Set<string>());
        // setModifiedUsers([]);
        // setButtonDisabled(true);
        // router.refresh();
    };

  const memoizedUsers = useMemo(() => users, [users]);

  return (
    <div className="overflow-x-auto">
      <form onSubmit={handleFormSubmit}>
        <table className="table table-compact md:table-normal w-full">
          <thead className="">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Cheat Used</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {memoizedUsers.map((user: any) => (
              <MemoizedRow
                key={user.id}
                user={user}
                roleChanged={roleChanged.has(user.id)}
                onRoleChange={handleRoleChange}
              />
            ))}
          </tbody>
        </table>
        <button
          className={`${componentStyles[`${buttonDisabled}`]}`}
          type="submit"
          disabled={buttonDisabled}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
