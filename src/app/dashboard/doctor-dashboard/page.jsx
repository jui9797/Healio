"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function DoctorDashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        👨‍⚕️ Doctor Dashboard
      </h1>
      <p className="text-gray-700 mb-4">
        Welcome, <span className="font-semibold">{user?.fullName}</span>!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/appointments"
          className="p-6 bg-white rounded-2xl shadow"
        >
          📅 Upcoming Appointments
        </Link>
        <Link
          href="/dashboard/records"
          className="p-6 bg-white rounded-2xl shadow"
        >
          📂 Patient Records
        </Link>
        <Link
          href="/dashboard/ai/report-summarizer"
          className="p-6 bg-white rounded-2xl shadow"
        >
          🤖 AI Report Summarizer
        </Link>
      </div>
    </div>
  );
}
