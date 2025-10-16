import Link from "next/link";
import AddUserClient from "./AddUserClient";

export const dynamic = "force-dynamic";


async function getUsers() {
  const baseUrl = `https://${process.env.VERCEL_URL}`;

  const res = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });

  if (!res.ok) {
    console.error("Failed to fetch users", res.statusText);
    return [];
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Users</h1>

      {/* Add User Form */}
      <AddUserClient />

      <ul>
        {users.map((u) => (
          <li key={u._id} style={{ margin: "0.5rem 0" }}>
            <Link href={`/users/${u._id}`}>{u.name} ({u.email})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
