"use client";
import { useState } from "react";

export default function ReportSummarizer() {
  const [report, setReport] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    if (!report) return;
    // Dummy AI Response
    setSummary(
      "Summary: The report suggests a mild condition. Regular follow-ups advised."
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🤖 AI Report Summarizer</h2>
      <textarea
        value={report}
        onChange={(e) => setReport(e.target.value)}
        placeholder="Paste your medical report here..."
        className="border px-3 py-2 rounded-lg w-full h-40 mb-4"
      />
      <button
        onClick={handleSummarize}
        className="bg-teal-600 text-white px-4 py-2 rounded-lg"
      >
        Summarize
      </button>
      {summary && <p className="mt-4 text-gray-700">{summary}</p>}
    </div>
  );
}
