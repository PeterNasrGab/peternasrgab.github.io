import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Prevent multiple connections in dev (Hot Reloading)
if (!MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let isConnected = false; // track connection

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
