// src/app/api/hello/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect"; // Adjust the path if needed

export async function GET(request) {
  try {
    await dbConnect();
    console.log("MongoDB connected successfully!");
    return NextResponse.json({
      message: "Connected to MongoDB!",
      status: "success",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return NextResponse.json(
      {
        message: "Failed to connect to MongoDB.",
        status: "error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
