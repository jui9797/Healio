"use client";

import { useState } from "react";
import Image from "next/image";

const sections = [
  {
    id: "01",
    title: "Unparalleled access",
    description:
      "On-demand virtual specialists—including reproductive endocrinologists, doulas, and mental health providers—to support clinical, emotional, and financial needs.",
    image: "/image.jpg",
  },
  {
    id: "02",
    title: "Aligned benefit management",
    description:
      "Seamlessly aligned benefits ensuring optimized support for employees and organizations.",
    image: "/benifit.jpg",
  },
  {
    id: "03",
    title: "Health equity on a global scale",
    description:
      "Providing inclusive, accessible, and equitable healthcare solutions across 175+ countries.",
    image: "/global.jpg",
  },
  {
    id: "04",
    title: "Improved outcomes and costs",
    description:
      "Delivering better results while reducing overall healthcare costs for members and providers.",
    image: "/cost.jpeg",
  },
];

export default function Support() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#005350] text-white py-10 lg:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 lg:px-12 items-center">
        {/* Left - Dynamic Image */}
        <div className="flex justify-center">
          <Image
            src={sections[activeIndex].image}
            alt="Accordion Preview"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg transition-all duration-500"
          />
        </div>

        {/* Right - Custom Accordion */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug mb-8">
            An end-to-end platform supporting <br /> members in 100+ countries
          </h2>

          <div className="space-y-4">
            {sections.map((sec, index) => (
              <div
                key={sec.id}
                className="border-b border-white/30 pb-4 cursor-pointer"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-xl font-semibold text-emerald-200">
                    {sec.id} {sec.title}
                  </span>
                  <span className="text-white">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-white/80">{sec.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
