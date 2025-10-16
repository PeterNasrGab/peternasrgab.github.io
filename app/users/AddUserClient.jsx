"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUserClient() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    if (!name || !email) {
      setMessage("Name and email are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        setMessage("User added successfully!");
        setName("");
        setEmail("");
        router.refresh(); // refresh the page to show new user
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to add user.");
      }
    } catch (err) {
      setMessage("Failed to add user.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", marginBottom: "1rem" }}>
      <h2>Add New User</h2>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "0.5rem" }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleAdd} disabled={loading} style={{ marginTop: "0.5rem" }}>
        {loading ? "Adding..." : "Add User"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
