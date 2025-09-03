import { clerkClient } from "@clerk/nextjs/server";

export async function updateUserRole(userId, role) {
  try {
    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        role: role,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Error updating role:", error);
    return { success: false, error };
  }
}
