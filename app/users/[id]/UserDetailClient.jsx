"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserDetailClient({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    setLoading(true);
    const res = await fetch(`/api/users?id=${user._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    if (res.ok) setMessage("User updated successfully!");
    else setMessage((await res.json()).error || "Update failed");
    setLoading(false);
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;
    setLoading(true);
    const res = await fetch(`/api/users?id=${user._id}`, { method: "DELETE" });
    if (res.ok) router.push("/users");
    else setMessage((await res.json()).error || "Delete failed");
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Details</h1>
      <div style={{ margin: "1rem 0" }}>
        <label>Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div style={{ margin: "1rem 0" }}>
        <label>Email:</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <button onClick={handleUpdate} disabled={loading}>{loading ? "Updating..." : "Update"}</button>
        <button onClick={handleDelete} disabled={loading} style={{ marginLeft: "1rem" }}>{loading ? "Deleting..." : "Delete"}</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
