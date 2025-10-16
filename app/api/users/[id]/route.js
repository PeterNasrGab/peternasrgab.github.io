import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_, { params }) {
  await connectDB();
  const user = await User.findById(params.id);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  });
}

export async function PATCH(req, { params }) {
  await connectDB();
  const data = await req.json();
  const user = await User.findByIdAndUpdate(params.id, data, { new: true });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  });
}

export async function DELETE(_, { params }) {
  await connectDB();
  const deleted = await User.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ message: "User deleted successfully" });
}
