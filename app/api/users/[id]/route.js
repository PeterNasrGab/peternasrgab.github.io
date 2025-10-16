import { connectDB } from "../../../../lib/mongodb";
import { User } from "../../../../models/User";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  await connectDB();
  const user = await User.findById(params.id);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(user);
}

export async function PUT(request, { params }) {
  await connectDB();
  const data = await request.json();
  const user = await User.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(user);
}

export async function DELETE(_, { params }) {
  await connectDB();
  await User.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "User deleted successfully" });
}
