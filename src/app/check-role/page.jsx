"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckRolePage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const role = user.publicMetadata?.role;
    if (!role) {
      router.push("/select-role");
    } else if (role === "doctor") {
      router.push("/dashboard/doctor-dashboard");
    } else {
      router.push("/dashboard/patient-dashboard");
    }
  }, [user, router]);

  return <p className="p-6">Checking role...</p>;
}
