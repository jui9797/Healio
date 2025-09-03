import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/clerk-sdk-node"; // use clerkClient

export async function POST(req, { params }) {
  try {
    const { role } = await req.json();
    const userId = params?.id; // ✅ match the route param from frontend

    if (!userId || !role) {
      return NextResponse.json(
        { error: "Missing userId or role" },
        { status: 400 }
      );
    }

    // Update user metadata
    const updatedUser = await clerkClient.users.updateUser(userId, {
      publicMetadata: { role },
    });

    return NextResponse.json(
      { success: true, user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Role update failed:", error);
    return NextResponse.json(
      { error: "Update failed", details: error.message },
      { status: 500 }
    );
  }
}
