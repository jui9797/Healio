"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectRole() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSelectRole = async (role) => {
    if (!user?.id) {
      console.error("No user ID found");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/update-role/${user.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Role updated successfully:", data);
        alert(`Your role has been updated to "${role}"`);
        router.push("/");
      } else {
        console.error("Failed to update role:", data);
        alert("Failed to update role. Check console for details.");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <button
        disabled={loading}
        onClick={() => handleSelectRole("doctor")}
        className="px-6 py-2 bg-teal-500 text-white rounded disabled:opacity-50"
      >
        Select Doctor
      </button>

      <button
        disabled={loading}
        onClick={() => handleSelectRole("patient")}
        className="px-6 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Select Patient
      </button>
    </div>
  );
}
