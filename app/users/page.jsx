import Link from "next/link";

async function getUsers() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Users</h1>
      <ul>
        {users.map(u => (
          <li key={u._id} style={{ margin: "0.5rem 0" }}>
            <Link href={`/users/${u._id}`}>{u.name} ({u.email})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
