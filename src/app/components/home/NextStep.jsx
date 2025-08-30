"use client";

export default function NextStep() {
  return (
    <section className="bg-teal-900 text-center my-10 lg:my-28 py-4 lg:py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white mb-6">
          Ready to book your appointment?
        </h2>

        <p className="text-lg text-gray-200 mb-8">
          Let’s talk about how we can work together to make healthcare work for
          all of us.
        </p>

        <button className="bg-white text-teal-800 font-medium px-6 py-3 rounded-md shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
