"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function PatientDashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        🧑 Patient Dashboard
      </h1>
      <p className="text-gray-700 mb-4">
        Welcome, <span className="font-semibold">{user?.fullName}</span>!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/doctors"
          className="p-6 bg-white rounded-2xl shadow"
        >
          🔍 Find Doctors
        </Link>
        <Link
          href="/dashboard/appointments/new"
          className="p-6 bg-white rounded-2xl shadow"
        >
          📅 Book Appointment
        </Link>
        <Link
          href="/dashboard/ai/symptom-checker"
          className="p-6 bg-white rounded-2xl shadow"
        >
          🤖 AI Symptom Checker
        </Link>
      </div>
    </div>
  );
}
