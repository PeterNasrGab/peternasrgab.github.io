import { notFound } from "next/navigation";
import UserDetailClient from "./UserDetailClient";

async function getUser(id) {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/users?id=${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function UserDetail({ params }) {
  const { id } = await params;
  const user = await getUser(id);
  if (!user) return notFound();

  return <UserDetailClient user={user} />;
}
