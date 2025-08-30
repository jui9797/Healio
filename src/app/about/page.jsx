import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-[#005350] mb-6">
        About Healio
      </h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Healio is your trusted healthcare platform that helps you connect with
        top doctors and book appointments instantly. We believe in making
        healthcare accessible, simple, and reliable for everyone.
      </p>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            At Healio, we aim to provide a truly seamless experience where
            patients can quickly find the right doctors, book consultations with
            ease, and access quality healthcare without any hassle. By
            leveraging the power of technology, Healio bridges the gap between
            patients and doctors, ensuring faster connections, smarter choices,
            and better outcomes. Our platform is built to simplify the
            healthcare journey—whether it’s searching for trusted specialists,
            scheduling appointments, or managing consultations—so that you can
            focus on what matters most: your health and well-being.
          </p>
        </div>
        <Image
          src="/image.jpg"
          alt="Our Mission"
          width={500}
          height={350}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-8 text-center py-10 lg:py-20">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#005350] mb-3">Trust</h3>
          <p className="text-gray-600">
            Building a reliable platform patients can trust with their
            healthcare needs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#005350] mb-3">Care</h3>
          <p className="text-gray-600">
            Ensuring patients receive the best care from qualified healthcare
            professionals.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#005350] mb-3">
            Innovation
          </h3>
          <p className="text-gray-600">
            Using technology to improve healthcare accessibility and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
