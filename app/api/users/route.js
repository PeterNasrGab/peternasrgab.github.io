import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  await connectDB();
  const users = await User.find().sort({ createdAt: -1 });
  const response= NextResponse.json(users.map(u => ({
    _id: u._id.toString(),
    name: u.name,
    email: u.email,
  })));

 response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
return response;
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const user = await User.create(body);
  return NextResponse.json({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
  }, { status: 201 });
}
