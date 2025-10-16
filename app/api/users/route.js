import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const user = await User.findById(id);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    });
  }

  const users = await User.find().sort({ createdAt: -1 });
  return NextResponse.json(users.map(u => ({
    _id: u._id.toString(),
    name: u.name,
    email: u.email,
  })));
}

export async function PATCH(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const updates = await req.json();
  const user = await User.findByIdAndUpdate(id, updates, { new: true });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ _id: user._id.toString(), name: user.name, email: user.email });
}

export async function DELETE(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const deleted = await User.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ message: "User deleted successfully" });
}
