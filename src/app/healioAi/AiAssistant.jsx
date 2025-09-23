"use client";
import { useState } from "react";
import aiAsistant from "../../../public/chatbot.json";
import Lottie from "lottie-react";

const AiAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askHealio = async () => {
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setAnswer("Sorry, I could not process that.");
      }
    } catch (err) {
      console.error(err);
      setAnswer("Error connecting to AI.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 lg:px-20 my-10 lg:my-28 bg-gray-100 py-4 lg:py-8">
      <h2 className="text-2xl lg:text-4xl font-bold text-teal-900 mb-10">
        Healio AI Assistant
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* lottie */}
        <div className="border-2 flex justify-center items-center p-4">
          {" "}
          <Lottie
            animationData={aiAsistant}
            loop={true}
            className="w-64 h-64 lg:w-96 lg:h-96"
          />
        </div>

        {/* input box */}
        <div className="flex flex-col gap-4 border-2 p-4">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="I have a headache, which doctor should I see?"
            className="bg-white p-2 lg:p-4 rounded-lg"
          />
          <button
            onClick={askHealio}
            className="text-white bg-[#005350] font-bold p-4 rounded-lg cursor-pointer"
            disabled={loading}
          >
            {loading ? "Asking..." : "Ask Healio AI"}
          </button>
          {answer && (
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-800">{answer}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
