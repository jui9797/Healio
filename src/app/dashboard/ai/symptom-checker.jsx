"use client";
import { useState } from "react";

export default function SymptomChecker() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    if (!symptom) return;
    // Dummy AI Response
    if (symptom.toLowerCase().includes("fever")) {
      setResult(
        "It looks like a mild fever 🤒. Please take rest and drink fluids."
      );
    } else {
      setResult("AI could not identify. Please consult a doctor.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🤖 AI Symptom Checker</h2>
      <input
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="Enter your symptom..."
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <button
        onClick={handleCheck}
        className="bg-teal-600 text-white px-4 py-2 rounded-lg"
      >
        Check
      </button>
      {result && <p className="mt-4 text-gray-700">{result}</p>}
    </div>
  );
}
