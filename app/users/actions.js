"use server";

import { connectDB } from "../../lib/mongodb";
import { User } from "../../models/User";

export async function addUser(formData) {
  await connectDB();
  const name = formData.get("name");
  const email = formData.get("email");
  await User.create({ name, email });
}
